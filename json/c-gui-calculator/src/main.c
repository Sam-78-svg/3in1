#include <gtk/gtk.h>
#include "ui.h"

int main(int argc, char *argv[]) {
    gtk_init(&argc, &argv);
    
    create_ui();
    
    gtk_main();
    
    return 0;
}