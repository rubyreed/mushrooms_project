class CreateMushrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :mushrooms do |t|
      t.string :variety
      t.string :color
      t.string :usage

      t.timestamps
    end
  end
end
