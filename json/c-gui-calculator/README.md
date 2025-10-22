# C GUI Calculator

This project is a simple graphical user interface (GUI) calculator application built using C and GTK. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Project Structure

```
c-gui-calculator
├── src
│   ├── main.c        # Entry point of the application
│   ├── calc.c        # Implementation of calculator logic
│   ├── calc.h        # Header file for calculator functions
│   ├── ui.c          # Implementation of the user interface
│   └── ui.h          # Header file for UI functions
├── include
│   └── config.h      # Configuration settings and constants
├── gui
│   └── layout.glade   # GUI layout defined using Glade
├── Makefile          # Build instructions for the project
├── .gitignore        # Files and directories to ignore by Git
├── LICENSE           # Licensing information
└── README.md         # Documentation for the project
```

## Requirements

- GTK development libraries
- A C compiler (e.g., GCC)

## Building the Project

To build the project, navigate to the project directory and run:

```
make
```

This will compile the source files and create the executable.

## Running the Application

After building the project, you can run the application with:

```
./c-gui-calculator
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. 

## License

This project is licensed under the MIT License. See the LICENSE file for more details.