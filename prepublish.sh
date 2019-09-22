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
echo $(green "---------------------------------------------------- |")
echo $(green "Ok, before you publish let's test your code 🧪")
echo $(green "---------------------------------------------------- |")
echo

# Did test fail, returns 1 if yes, 0 if no.
npm run test
did_tests_fail="$(echo $?)"

if [[ $did_tests_fail == 1 ]]
then
    echo
    echo $(red "---------------------------------------------------- |")
    echo $(red "🚨 Your test have failed, please don't publish 🚨")
    echo $(red "---------------------------------------------------- |")

    exit
else
    echo
    echo $(green "---------------------------------------------------- |")
    echo $(green "✅ Test have passed, let's publish this thing! ✅")
    echo $(green "---------------------------------------------------- |")
    echo $(green "Please don't forget to update version number")
    echo $(green "---------------------------------------------------- |")
    echo
    echo ./node_modules/version-bump-prompt/bin/bump.js --commit --tag
fi
