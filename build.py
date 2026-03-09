import os
import markdown

# 1. Read the template
with open('test.html', 'r') as f:
    template = f.read()

# 2. Get and sort markdown files from /content
md_files = sorted([f for f in os.listdir('content') if f.endswith('.md')])
all_html = ""

for md_file in md_files:
    with open(f'content/{md_file}', 'r') as f:
        # Convert MD to HTML and wrap in the 'job' div structure
        job_content = markdown.markdown(f.read())
        all_html += f'<div class="job">{job_content}</div>'

# 3. Inject and save
output = template.replace('', all_html)
with open('test.html', 'w') as f:
    f.write(output)