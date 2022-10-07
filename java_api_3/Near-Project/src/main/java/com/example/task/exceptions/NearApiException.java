package com.example.task.exceptions;

public class NearApiException extends RuntimeException {
    public NearApiException() {
        super();
    }

    public NearApiException(String message, Throwable cause) {
        super(message, cause);
    }

    public NearApiException(Throwable cause) {
        super(cause);
    }

    protected NearApiException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public NearApiException(String name) {
    }
}
