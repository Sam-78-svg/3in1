#include <gtk/gtk.h>
#include "ui.h"
#include "calc.h"

static void on_button_clicked(GtkButton *button, gpointer user_data) {
    const gchar *button_label = gtk_button_get_label(button);
    // Handle button clicks for calculator operations
}

void create_ui(GtkApplication *app) {
    GtkWidget *window;
    GtkWidget *grid;

    window = gtk_application_window_new(app);
    gtk_window_set_title(GTK_WINDOW(window), "Calculator");
    gtk_window_set_default_size(GTK_WINDOW(window), 300, 400);

    grid = gtk_grid_new();
    gtk_container_add(GTK_CONTAINER(window), grid);

    // Create buttons and add them to the grid
    for (int i = 0; i < 10; i++) {
        GtkWidget *button = gtk_button_new_with_label(g_strdup_printf("%d", i));
        g_signal_connect(button, "clicked", G_CALLBACK(on_button_clicked), NULL);
        gtk_grid_attach(GTK_GRID(grid), button, i % 3, i / 3, 1, 1);
    }

    GtkWidget *add_button = gtk_button_new_with_label("+");
    g_signal_connect(add_button, "clicked", G_CALLBACK(on_button_clicked), NULL);
    gtk_grid_attach(GTK_GRID(grid), add_button, 3, 0, 1, 1);

    // Add more buttons for other operations...

    gtk_widget_show_all(window);
}