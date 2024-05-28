import subprocess

def run_git_commands():
    try:
        # Run `git add .`
        print("Running `git add .`...")
        subprocess.run(['git', 'add', '.'], check=True)

        # Run `git commit -m "first commit"`
        print('Running `git commit -m "first commit"`...')
        subprocess.run(['git', 'commit', '-m', 'first commit'], check=True)

        # Run `git push`
        print("Running `git push`...")
        subprocess.run(['git', 'push'], check=True)

    except subprocess.CalledProcessError as e:
       

if __name__ == "__main__":
    while(True):
        run_git_commands()
