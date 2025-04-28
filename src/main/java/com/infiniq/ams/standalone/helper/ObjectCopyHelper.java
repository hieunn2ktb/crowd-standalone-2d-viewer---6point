package com.infiniq.ams.standalone.helper;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;

@Component
public class ObjectCopyHelper {
    private Gson gson = new Gson();

    public ObjectCopyHelper() {
    }

    public <T> T copyObject(Object sourceObject, Class<T> targetType) {
        if (sourceObject == null) {
            return null;
        } else {
            String sourceJsonString = this.gson.toJson(sourceObject);
            Object tartgetObject = this.gson.fromJson(sourceJsonString, targetType);
            return (T)targetType.cast(tartgetObject);
        }
    }
}
