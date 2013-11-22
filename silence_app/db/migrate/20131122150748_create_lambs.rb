class CreateLambs < ActiveRecord::Migration
  def change
    create_table :lambs do |t|

      t.timestamps
    end
  end
end
