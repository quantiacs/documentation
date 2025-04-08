FROM --platform=linux/amd64 debian:11.6-slim as builder

RUN apt-get update && apt-get -y install curl bzip2 openssh-client make && \
    curl -sSL https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -o /tmp/miniconda.sh && \
    bash /tmp/miniconda.sh -bfp /usr/local && \
    rm -rf /tmp/miniconda.sh && \
    conda update conda && \
    conda install -y \
        'sphinx=8.1' \
        'recommonmark=0.6' \
        'conda-forge::sphinx-markdown-tables' \
        'nbsphinx' \
        'IPython' && \
    curl -sL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get -y install nodejs && \
    apt-get -y autoremove --purge curl bzip2 openssh-client && \
    rm -rf /var/lib/apt/lists/* /var/log/dpkg.log && \
    conda clean -afy

COPY theme /opt/theme
RUN cd /opt/theme/ui && npm install && npm run build && cd .. && \
    pip3 install --no-cache-dir -e . && \
    pip install --no-cache-dir sphinx_press_theme

COPY en /opt/en
RUN cd /opt/en/source && python pull_examples.py && \
    cd /opt/en && make clean && make html


FROM --platform=linux/amd64 nginx:1.20.1 as production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/en/build/html /opt/en
