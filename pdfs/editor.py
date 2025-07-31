import tkinter as tk
from tkinter import filedialog, messagebox, font

class TextEditor:
    """A simple text editor application built with Python's tkinter."""

    def __init__(self, root):
        """Initialize the TextEditor application."""
        self.root = root
        self.root.title("Untitled - Text Editor")
        self.root.geometry("800x600")

        # Set the application icon (optional, requires a .ico file)
        # try:
        #     self.root.iconbitmap('editor.ico')
        # except tk.TclError:
        #     print("Icon 'editor.ico' not found. Skipping.")

        # --- Variables ---
        self.current_file_path = None
        self.text_changed = False

        # --- UI Components ---
        self.create_widgets()
        self.create_menu()
        self.update_status_bar()

        # --- Bindings ---
        self.text_area.bind("<Key>", self.on_text_change)
        self.text_area.bind("<Control-s>", self.save_file)
        self.text_area.bind("<Control-o>", self.open_file)
        self.text_area.bind("<Control-n>", self.new_file)

        self.root.protocol("WM_DELETE_WINDOW", self.on_closing)


    def create_widgets(self):
        """Create the main widgets of the editor."""
        # --- Main Frame ---
        main_frame = tk.Frame(self.root)
        main_frame.pack(expand=True, fill='both')

        # --- Text Area ---
        # Use a modern font
        text_font = font.Font(family="Consolas", size=12)
        self.text_area = tk.Text(
            main_frame,
            wrap='word', # wrap at word boundaries
            undo=True, # enable undo/redo
            font=text_font,
            padx=10,
            pady=10,
            borderwidth=0,
            highlightthickness=0,
            bg="#2d2d2d", # dark background
            fg="#cccccc", # light text
            insertbackground="#ffffff" # white cursor
        )

        # --- Scrollbar ---
        scrollbar = tk.Scrollbar(main_frame, command=self.text_area.yview)
        self.text_area.config(yscrollcommand=scrollbar.set)
        scrollbar.pack(side='right', fill='y')
        self.text_area.pack(expand=True, fill='both')

        # --- Status Bar ---
        self.status_bar = tk.Label(
            self.root,
            text="Line: 1 | Col: 1",
            anchor='e',
            padx=10,
            bg="#F9F6F6",
            fg="#090909"
        )
        self.status_bar.pack(side='bottom', fill='x')


    def create_menu(self):
        """Create the application's menu bar."""
        menu_bar = tk.Menu(self.root)
        self.root.config(menu=menu_bar)

        # --- File Menu ---
        file_menu = tk.Menu(menu_bar, tearoff=0)
        menu_bar.add_cascade(label="File", menu=file_menu)
        file_menu.add_command(label="New", accelerator="Ctrl+N", command=self.new_file)
        file_menu.add_command(label="Open...", accelerator="Ctrl+O", command=self.open_file)
        file_menu.add_command(label="Save", accelerator="Ctrl+S", command=self.save_file)
        file_menu.add_command(label="Save As...", command=self.save_as_file)
        file_menu.add_separator()
        file_menu.add_command(label="Exit", command=self.on_closing)

        # --- Edit Menu ---
        edit_menu = tk.Menu(menu_bar, tearoff=0)
        menu_bar.add_cascade(label="Edit", menu=edit_menu)
        edit_menu.add_command(label="Undo", accelerator="Ctrl+Z", command=self.text_area.edit_undo)
        edit_menu.add_command(label="Redo", accelerator="Ctrl+Y", command=self.text_area.edit_redo)
        edit_menu.add_separator()
        edit_menu.add_command(label="Cut", accelerator="Ctrl+X", command=lambda: self.text_area.event_generate("<<Cut>>"))
        edit_menu.add_command(label="Copy", accelerator="Ctrl+C", command=lambda: self.text_area.event_generate("<<Copy>>"))
        edit_menu.add_command(label="Paste", accelerator="Ctrl+V", command=lambda: self.text_area.event_generate("<<Paste>>"))
        edit_menu.add_separator()
        edit_menu.add_command(label="Select All", accelerator="Ctrl+A", command=lambda: self.text_area.tag_add('sel', '1.0', 'end'))

        # --- Help Menu ---
        help_menu = tk.Menu(menu_bar, tearoff=0)
        menu_bar.add_cascade(label="Help", menu=help_menu)
        help_menu.add_command(label="About", command=self.show_about)

    # --- Menu Commands ---

    def new_file(self, event=None):
        """Clears the text area to start a new file."""
        if self.text_changed and not self.prompt_save():
            return
        self.text_area.delete(1.0, 'end')
        self.root.title("Untitled - Text Editor")
        self.current_file_path = None
        self.text_changed = False
        self.update_status_bar()

    def open_file(self, event=None):
        """Opens a file for editing."""
        if self.text_changed and not self.prompt_save():
            return
        filepath = filedialog.askopenfilename(
            filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")]
        )
        if not filepath:
            return
        try:
            self.text_area.delete(1.0, 'end')
            with open(filepath, "r", encoding="utf-8") as file:
                self.text_area.insert(1.0, file.read())
            self.current_file_path = filepath
            self.root.title(f"{filepath} - Text Editor")
            self.text_changed = False
        except Exception as e:
            messagebox.showerror("Error", f"Failed to open file: {e}")
        self.update_status_bar()

    def save_file(self, event=None):
        """Saves the current file."""
        if self.current_file_path:
            try:
                content = self.text_area.get(1.0, 'end-1c') # -1c to remove trailing newline
                with open(self.current_file_path, "w", encoding="utf-8") as file:
                    file.write(content)
                self.text_changed = False
                self.root.title(f"{self.current_file_path} - Text Editor")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to save file: {e}")
        else:
            self.save_as_file()

    def save_as_file(self):
        """Saves the current file with a new name."""
        filepath = filedialog.asksaveasfilename(
            defaultextension=".txt",
            filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")]
        )
        if not filepath:
            return
        try:
            content = self.text_area.get(1.0, 'end-1c')
            with open(filepath, "w", encoding="utf-8") as file:
                file.write(content)
            self.current_file_path = filepath
            self.root.title(f"{filepath} - Text Editor")
            self.text_changed = False
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save file: {e}")

    def on_closing(self):
        """Handles the window closing event."""
        if self.prompt_save():
            self.root.destroy()

    def prompt_save(self):
        """Prompts the user to save changes if the text has been modified."""
        if not self.text_changed:
            return True
        response = messagebox.askyesnocancel(
            "Save Changes?",
            "You have unsaved changes. Do you want to save them before closing?"
        )
        if response is True: # Yes
            self.save_file()
            return not self.text_changed # Return True if save was successful
        elif response is False: # No
            return True
        else: # Cancel
            return False

    def show_about(self):
        """Displays the about dialog."""
        messagebox.showinfo(
            "About Text Editor",
            "A simple text editor created using Python and tkinter.\n\n"
            "Created by Gemini."
        )

    # --- Event Handlers and Helpers ---

    def on_text_change(self, event=None):
        """Marks the text as changed and updates the status bar."""
        if not self.text_changed:
            self.text_changed = True
            # Add an asterisk to indicate unsaved changes
            if self.root.title().startswith("*"):
                return
            self.root.title("*" + self.root.title())
        self.update_status_bar()

    def update_status_bar(self, event=None):
        """Updates the line and column number in the status bar."""
        cursor_pos = self.text_area.index(tk.INSERT)
        line, col = cursor_pos.split('.')
        self.status_bar.config(text=f"Line: {line} | Col: {int(col) + 1}")


if __name__ == "__main__":
    root = tk.Tk()
    editor = TextEditor(root)
    root.mainloop()
