class UserSerializer < ActiveModel::Serializer
	attributes :first_name, :last_name, :role
end