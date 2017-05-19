class UpdateDefaultForPhotos < ActiveRecord::Migration
  def change
    change_column :photos, :caption, :string, default: ''
  end
end
