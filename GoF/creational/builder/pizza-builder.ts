class Pizza {
  public ingredients: string[] = [];

  public listIngredients(): void {
    console.log(`Pizza has: ${this.ingredients.join(', ')}`);
  }
}

interface PizzaBuilder {
  addDough(): this;
  addCheese(): this;
  addPepperoni(): this;
  addMushrooms(): this;
  build(): Pizza;
}

class CustomPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  public addDough(): this {
    this.pizza.ingredients.push('Thin Dough');
    return this;
  }

  public addCheese(): this {
    this.pizza.ingredients.push('Mozzarella Cheese');
    return this;
  }

  public addPepperoni(): this {
    this.pizza.ingredients.push('Spicy Pepperoni');
    return this;
  }

  public addMushrooms(): this {
    this.pizza.ingredients.push('Fresh Mushrooms');
    return this;
  }

  public build(): Pizza {
    const result = this.pizza;
    this.pizza = new Pizza(); // Reset builder for the next pizza
    return result;
  }
}

// Usage
const builder = new CustomPizzaBuilder();
const myPizza = builder
  .addDough()
  .addCheese()
  .addPepperoni()
  .build();

myPizza.listIngredients(); // Output: Pizza has: Thin Dough, Mozzarella Cheese, Spicy Pepperoni
