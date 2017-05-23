class Follow < ActiveRecord::Base
  validates :follower, :following, presence: true
  validates :follower, uniqueness: { scope: :following,
    message: "should follow once only" }


  belongs_to :following,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :User

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User
end
