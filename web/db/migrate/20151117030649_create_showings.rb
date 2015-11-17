class CreateShowings < ActiveRecord::Migration
  def change
    create_table :showings do |t|
      t.datetime :time, null: false

      t.timestamps null: false
    end
  end
end
