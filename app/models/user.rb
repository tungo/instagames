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
  validates :username, format: { with: /\A[a-zA-Z0-9_]+\z/,
    message: "can only use letters, numbers and underscores" }


  has_many :photos, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Photo

  has_many :likes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :comments, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

  has_many :in_follows, dependent: :destroy,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Follow

  has_many :out_follows, dependent: :destroy,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :following,
    through: :out_follows,
    source: :following

  has_many :followers,
    through: :in_follows,
    source: :follower


  attr_reader :password

  after_initialize :ensure_session_token

  has_attached_file :avatar, styles: { medium: "150x150#", thumb: "50x50#" }, default_url: "avatar-placeholder-200.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  friendly_id :username, use: [:slugged, :finders]

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

  def update_user(params, type)
    if type == "password"
      update_password(params)
    elsif type == "avatar"
      update_attributes(params)
    else
      update_attributes(params)
    end
  end

  def update_password(params)
    if !is_password?(params[:password])
      errors[:password] << "is incorect"
      nil
    else
      self.password = params[:new_password]
      self.save
    end
  end


  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
