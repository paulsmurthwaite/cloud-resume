import os
import markdown

def build():
    template_path = 'test.html'
    content_dir = 'content'
    placeholder = ''

    # 1. Read the template
    if not os.path.exists(template_path):
        print(f"Error: {template_path} not found.")
        return

    with open(template_path, 'r', encoding='utf-8') as f:
        template_content = f.read()

    # 2. Process Markdown files
    if not os.path.exists(content_dir):
        print(f"Error: {content_dir} folder not found.")
        return

    md_files = sorted([f for f in os.listdir(content_dir) if f.endswith('.md')])
    jobs_html = ""

    for md_file in md_files:
        with open(os.path.join(content_dir, md_file), 'r', encoding='utf-8') as f:
            # Convert Markdown to HTML
            html_chunk = markdown.markdown(f.read())
            # Wrap each file in a job div for CSS targeting
            jobs_html += f'<div class="job">\n{html_chunk}\n</div>\n'

    # 3. Inject and overwrite
    if placeholder in template_content:
        final_output = template_content.replace(placeholder, jobs_html)
        with open(template_path, 'w', encoding='utf-8') as f:
            f.write(final_output)
        print("Success: index.html updated with job history.")
    else:
        print(f"Error: Placeholder {placeholder} not found in index.html")

if __name__ == "__main__":
    build()