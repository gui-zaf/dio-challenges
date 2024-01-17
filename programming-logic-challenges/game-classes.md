# 3️⃣ Writing Game Classes

**What should be used**

- Variables
- Operators
- Loops
- Decision Structures
- Functions
- Classes and Objects

## Objective:

Create a generic class that represents a hero in an adventure, with the following properties:

- name
- age
- type (e.g., warrior, mage, monk, ninja)

Additionally, it should have a method called `attack` that must meet the following requirements:

- Display the message: "the {type} attacked using {attack}"
- Where the {type} should concatenate the type that is in the class property
- And in {attack}, a different description should be displayed according to the type, following the table below:

if mage -> in the attack, display (used magic)
if warrior -> in the attack, display (used sword)
if monk -> in the attack, display (used martial arts)
if ninja -> in the attack, display (used shuriken)

## Output

In the end, a message should be displayed:

- "the {type} attacked using {attack}"
  e.g., mage attacked using magic
        warrior attacked using sword
