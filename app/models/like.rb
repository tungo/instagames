class Like < ActiveRecord::Base
  validates :user, :photo, presence: true
  validates :user, uniqueness: { scope: :photo, message: "should like once only" }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo
end
