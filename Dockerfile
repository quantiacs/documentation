FROM debian:9.5 as builder

RUN apt update && apt -y install curl bzip2 openssh-client \
    && curl -sSL https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -o /tmp/miniconda.sh \
    && bash /tmp/miniconda.sh -bfp /usr/local \
    && rm -rf /tmp/miniconda.sh \
    && conda update conda \
    && apt -y remove curl bzip2 openssh-client \
    && apt -y autoremove \
    && apt autoclean \
    && rm -rf /var/lib/apt/lists/* /var/log/dpkg.log \
    && conda clean -afy

RUN  apt update && apt install make \
    && apt autoclean \
    && rm -rf /var/lib/apt/lists/* /var/log/dpkg.log


RUN conda install -y \
    'sphinx=3.2' \
    'recommonmark=0.6' \
    'conda-forge::sphinx-markdown-tables' \
    'nbsphinx' \
    'IPython' \
     && conda clean -afy

RUN apt update && apt -y install curl \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && apt -y remove curl \
    && apt -y autoremove \
    && apt autoclean \
    && rm -rf /var/lib/apt/lists/* /var/log/dpkg.log

COPY theme /opt/theme
RUN cd /opt/theme/ui   \
    && npm install \
    && npm run build \
    && cd .. && pip3 install -e .

RUN pip install sphinx_press_theme

COPY en /opt/en
RUN cd /opt/en/source && python pull_examples.py
RUN cd /opt/en && make clean && make html


FROM nginx:1.19 as production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/en/build/html /opt/en
