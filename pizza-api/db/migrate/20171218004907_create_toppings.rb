class CreateToppings < ActiveRecord::Migration[5.1]
  def change
    create_table :toppings do |t|
      t.string :name
      t.integer :pizza_id

      t.timestamps
    end
  end
end
