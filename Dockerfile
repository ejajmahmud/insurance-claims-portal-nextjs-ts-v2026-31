# Enterprise Docker Container for insurance-claims-portal-nextjs-ts-v2026-31
FROM alpine:3.19
RUN apk add --no-cache bash curl ca-certificates
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["echo", "Container active for insurance-claims-portal-nextjs-ts-v2026-31 (TypeScript / Next.js React App)"]
