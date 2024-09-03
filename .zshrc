setenv PATH $PATH":/Users/julienhuang/opt/GNAT/2020/bin"
export PATH="/path/to/directory:/opt/homebrew/bin:/Applications/Coq.app/Contents/Resources/bin:/Users/julienhuang/opt/GNAT/2020/bin:$PATH"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/julienhuang/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/julienhuang/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/julienhuang/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/julienhuang/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


# export PATH="Users/julienhuang/opt/GNAT/2020/bin:/Users/julienhuang/opt/anaconda3/bin:$PATH"  # commented out by conda initialize

# opam configuration
[[ ! -r /Users/julienhuang/.opam/opam-init/init.zsh ]] || source /Users/julienhuang/.opam/opam-init/init.zsh  > /dev/null 2> /dev/null
