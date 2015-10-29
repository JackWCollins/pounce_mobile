ActiveSupport.on_load(:active_model_serializer) do
	ActiveModel::Serializer.root = false
	ActiveModel::ArraySerializer.root = false
end