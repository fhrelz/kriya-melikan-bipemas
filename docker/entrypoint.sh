#!/bin/sh
set -e

PORT="${PORT:-80}"

# Adjust Apache Listen and VirtualHost port dynamically
sed -i "s/Listen [0-9]*/Listen ${PORT}/" /etc/apache2/ports.conf
sed -i "s/<VirtualHost \*:[0-9]*>/<VirtualHost \*:${PORT}>/" /etc/apache2/sites-available/000-default.conf

# Ensure database directory and SQLite file exist
mkdir -p /var/www/html/database
if [ ! -f /var/www/html/database/database.sqlite ]; then
    touch /var/www/html/database/database.sqlite
fi

# Ensure storage directories exist
mkdir -p /var/www/html/storage/framework/cache/data \
         /var/www/html/storage/framework/sessions \
         /var/www/html/storage/framework/views \
         /var/www/html/storage/logs \
         /var/www/html/bootstrap/cache

# Fix permissions
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Default fallback APP_KEY if missing
if [ -z "$APP_KEY" ]; then
    export APP_KEY="base64:OVpgy6usvQcDC8V01l5tTwG8jEVcJ76gLU32vSSmdlA="
fi

# Cache Laravel configurations
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true

echo "=== Sentra Gerabah Melikan (PkM 2026) Server ready on port ${PORT} ==="
exec apache2-foreground
