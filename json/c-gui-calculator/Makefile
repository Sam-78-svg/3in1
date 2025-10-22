CC=gcc
CFLAGS=-Iinclude -Wall
LDFLAGS=`pkg-config --cflags --libs gtk+-3.0`

SRC=src/main.c src/calc.c src/ui.c
OBJ=$(SRC:.c=.o)
TARGET=calculator

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) -o $@ $^ $(LDFLAGS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJ) $(TARGET)

.PHONY: all clean