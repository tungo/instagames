class UpdateDefaultForUsers < ActiveRecord::Migration
  def change
    change_column :users, :name, :string, default: ''
    change_column :users, :bio, :string, default: ''
  end
end
