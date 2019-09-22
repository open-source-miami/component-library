#! /bin/bash

# Color reset, code, and wrapper
reset="\033[0m"
green=$(tput setaf 2)
red=$(tput setaf 1)
red() {
    echo -e "${red}$1${reset}"
}
green() {
    echo -e "${green}$1${reset}"
}
echo
echo $(green "------------------------------------------------------------ |")
echo $(green "Ok, before we build going to waste some of your time 😁")
echo $(green "Deleting the existing ./build folder")
echo $(green "Then, deleting the existing ./node_modules folder")
echo $(green "------------------------------------------------------------ |")
echo

# Because of all of the issues that can arrise with peer dependencies lets delete a bunch of files
# TODO: maybe I should check whether these fodlers are here
rm -r ./build
rm -r ./node_modules
rm -r ./package-lock.json

# Then lets install all of the packages as per your package.json configuration
echo
echo $(green "------------------------------------------------------------ |")
echo $(green "Going to npm install the node modules as per json")
echo $(green "------------------------------------------------------------ |")
echo
npm install

# Then using rollup, not webpack we are going to transpile
echo
echo $(green "------------------------------------------------------------ |")
echo $(green "Now we are going to transpile the code to commonjs, and esm file formats")
echo $(green "A lot can go wrong so please pay attention to the messages it prints")
echo $(green "For more information about this process refer to rollup.config.js or docs")
echo $(green "------------------------------------------------------------ |")
echo
rollup -c 

