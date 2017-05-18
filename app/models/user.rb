# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  name                :string
#  bio                 :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  slug                :string
#

class User < ActiveRecord::Base
  extend FriendlyId

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :photos,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Photo

  attr_reader :password

  after_initialize :ensure_session_token

  has_attached_file :avatar, styles: { medium: "150x150#", thumb: "20x20#" }, default_url: "avatar-placeholder-200.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  friendly_id :username, use: :slugged

  def self.generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
