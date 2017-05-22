class Follow < ActiveRecord::Base
  validations :follower, :following, presence: true
  validations :follower, uniqueness: { scope: :following,
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
