import subprocess
import sys

def run_command(command):
    try:
        result = subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e.stderr}")
        sys.exit(1)

def has_changes_to_commit():
    # Run `git status --porcelain` to check for changes
    status_output = run_command(['git', 'status', '--porcelain'])
    return bool(status_output.strip())

def run_git_commands(commit_message):
    if not has_changes_to_commit():
        
        return

    try:
        # Run `git add .`
        print("Running `git add .`...")
        run_command(['git', 'add', '.'])

        
        run_command(['git', 'commit', '-m', commit_message])

        # Run `git push`
        run_command(['git', 'push'])

        print("All commands executed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e.stderr}")

if __name__ == "__main__":
   
     if len(sys.argv) != 2:
        print("Usage: python git_automation.py <commit_message>")
        sys.exit(1)

     commit_message = sys.argv[1]
     run_git_commands(commit_message)
