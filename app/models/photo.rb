class Photo < ActiveRecord::Base
  validates :url, presence: true
end
