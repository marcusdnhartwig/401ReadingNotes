# Bash Command Line Tutorials

*All notes are taken from reading material*

- The aim is to be lazy. Why should we do anything we can get the computer to do for us?

## The Command Line

- A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

- If you would like to know which shell you are using you may use a command called echo to display a system variable stating your current shell.

- Here's your first shortcut. When you enter commands, they are actually stored in a history. You can traverse this history using the up and down arrow keys. So don't bother re-typing out commands you have previously entered, you can usually just hit the up arrow a few times. You can also edit these commands using the left and right arrow keys to move the cursor where you want.

## Basic Navigation

- The first command we are going to learn is pwd which stands for Print Working Directory. (You'll find that a lot of commands in linux are named as an abbreviation of a word or words describing them. This makes it easier to remember them.) The command does just that. It tells you what your current or present working directory is.

- Whenever we refer to either a file or directory on the command line, we are in fact referring to a path. ie. A path is a means to get to a particular file or directory on the system.

- There are 2 types of paths we can use, **absolute** and **relative.**

- ~ (tilde) - This is a shortcut for your home directory.

- . (dot) - This is a reference to your current directory.

- .. (dotdot)- This is a reference to the parent directory.

**If you run the command cd without any arguments then it will always take you back to your home directory.**

## More About Files

* Ok, the first thing we need to appreciate with linux is that under the hood, everything is actually a file. A text file is a file, a directory is a file, your keyboard is a file (one that the system reads from only), your monitor is a file (one that the system writes to only) etc.

* Spaces in file and directory names are perfectly valid but we need to be a little careful with them. As you would remember, a space on the command line is how we seperate items.

* scape character, which is a backslash ( \ ). What the backslash does is escape (or nullify) the special meaning of the next character.

* In the previous section we learnt about something called Tab Completion. If you use that before encountering the space in the directory name then the terminal will automatically escape any spaces in the name for you.

* If the file or directory's name begins with a . (full stop) then it is considered to be hidden. You don't even need a special command or action to make a file hidden.

## Manual Pages

* The manual pages are a set of pages that explain every command available on your system including what they do, the specifics of how you run them and what command line arguments they accept.

* 'man < command to look up > ls'

* man -k < search term > It is possible to do a keyword search on the Manual pages. This can be helpful if you're not quite sure of what command you may want to use but you know what you want to achieve.

**If you want to search within a manual page this is also possible. To do this, whilst you are in the particular manual page you would like to search press forward slash '/' followed by the term you would like to search for and hit 'enter' If the term appears multiple times you may cycle through them by pressing the 'n' button for next.**

## File Manipulation

- Creating a directory is pretty easy. The command we are after is mkdir which is short for Make Directory.

- There are a few useful options available for **mkdir.** Can you remember where we may go to find out the command line options a particular command supports? The first one is **-p** which tells mkdir to make parent directories as needed (demonstration of what that actually means below). The second one is **-v** which makes mkdir tell us what it is doing (as you saw in the example above, it normally does not).

- The command to remove a directory is rmdir, short for remove directory.

- A lot of commands that involve manipulating data within a file have the nice feature that they will create a file automatically if we refer to it and it does not exist. In fact we can make use of this very characteristic to create blank files using the command **touch.**

- The command we use for this is **cp** which stands for copy.
- cp [ options ] < source > < destination >

- To move a file we use the command mv which is short for move. It operates in a similar way to cp. One slight advantage is that we can move directories without having to provide the -r option.

**No undo**
*The Linux command line does not have an undo feature. Perform destructive actions carefully.*

## Cheat Sheet

### **Future Marcus, here is a sweet cheat sheet for my command line**

[Ryans Tutorials Cheat Sheet](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)