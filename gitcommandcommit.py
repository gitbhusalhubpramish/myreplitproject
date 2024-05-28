import subprocess

def run_git_commands():
    try:
        # Run `git add .`
        subprocess.run(['git', 'add', '.'], check=True)

        # Run `git commit -m "first commit"`
        subprocess.run(['git', 'commit', '-m', 'first commit'], check=True)

        # Run `git push`
        subprocess.run(['git', 'push'], check=True)

    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    while(True):
        run_git_commands()
