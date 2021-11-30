import urllib.request
import json
import re
import os

BASE_URL = 'https://quantiacs.com'
# BASE_URL='https://staging-2.quantnet-ai.ru'
TOC_SECTION = 'Examples'

curdir = os.path.abspath(os.path.dirname(__file__))
# print(curdir)
os.makedirs(curdir + '/examples', exist_ok=True)

for f in os.listdir(curdir + '/examples'):
    os.remove(curdir + '/examples/' + f)

# load list
url = BASE_URL + '/referee/template/'
print('load', url)
with urllib.request.urlopen(BASE_URL + '/referee/template/') as response:
    txt = response.read()
    template_list = json.loads(txt)
template_list = [t for t in template_list if t['templateType'] == 'TEMPLATE']
template_list.sort(key=lambda i: -1 if 'first' in i['tags'] else i['templateOrder'])
print("Template list:", [t['name'] for t in template_list])

# load
for t in template_list:
    slug = re.sub(r'[^a-z0-9]+', '_', t['name'].lower())
    print(slug)
    t['slug'] = slug
    url = BASE_URL + '/referee/template/' + str(t['id']) + '/html'
    print('load', url)
    with urllib.request.urlopen(url) as response:
        txt = response.read()
    txt = txt.decode()

    txt_use_global_requirejs = txt.replace(
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>',
        "")

    sections = re.split(r'<h[1-2][^>]*>', txt_use_global_requirejs)
    sections = [re.split(r'</h[1-2]>', s) for s in sections]

    with open(curdir + '/examples/' + slug + '.rst', 'w') as f:
        # f.write(t['name'] + "\n")
        # f.write('='*len(t['name']) + "\n\n")
        first = True
        num = 0
        for s in sections:
            num += 1
            fn = slug + "_" + str(num) + '.html'
            with open(curdir + '/examples/' + fn, 'w') as sf:
                sf.write(s[-1])
            if len(s) > 1:
                if first:
                    first = False
                    title = t['name']
                    if 'first' in t['tags']:
                        title += " Strategy"
                    f.write(title + "\n")
                    f.write('=' * len(title) + "\n\n")
                    f.write(t['comment'] + "\n\n")
                    f.write("You can clone and edit this example " +
                            "`there <" + BASE_URL + "/personalpage/strategies>`_ " +
                            "(tab Examples).\n\n")
                    f.write("-----\n\n")
                else:
                    title = s[0].split('<a')[0].strip()
                    if 'first' in t['tags']:
                        f.write(title + "\n")
                        f.write('-' * len(title) + "\n\n")
                    else:
                        f.write('**' + title + "**\n\n")
            f.write(".. raw:: html\n")
            f.write("   :file: " + fn + "\n\n")

# build toc
with open(curdir + '/index.rst', 'r') as f:
    toc = f.read()
TOC_BEGIN_TOKEN = ':caption: ' + TOC_SECTION
toc = toc.split(TOC_BEGIN_TOKEN)
toc_before = toc[0] + TOC_BEGIN_TOKEN + '\n\n'
toc_after = '\n\n' + '\n\n'.join(toc[1].split('\n\n')[2:])
toc_between = '\n'.join(['   examples/' + t['slug'] + '.rst' for t in template_list])
toc = toc_before + toc_between + toc_after
with open(curdir + '/index.rst', 'w') as f:
    f.write(toc)
