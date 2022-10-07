package com.github.nearproject.exception;

public class RequestValidationException extends NearServerException{
    public RequestValidationException(String message) {
        super(message);
    }
}
