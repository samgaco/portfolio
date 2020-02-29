class AddLivelinkToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :livelink, :string,  :default => "#"
  end
end
