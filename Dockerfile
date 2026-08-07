FROM alpine:latest

RUN apk add --no-cache lighttpd

# Create directories and set ownership before copying config
RUN mkdir -p /var/log/lighttpd /www /etc/lighttpd && \
    chown -R lighttpd:lighttpd /var/log/lighttpd /www /etc/lighttpd

# Copy config as the lighttpd user
COPY --chown=lighttpd:lighttpd lighttpd.conf /etc/lighttpd/lighttpd.conf

USER lighttpd

EXPOSE 8080

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
