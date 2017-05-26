# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  caption            :string           default("")
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ActiveRecord::Base
  validates :user, presence: true
  validates :caption, length: { maximum: 255 }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :likes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :comments, dependent: :destroy,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Comment

  has_attached_file :image,
    styles: { large: "600x", medium: "300x300#" },
    default_url: "photo-placeholder-950-600.png",
    s3_protocol: :https
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_presence :image
end
