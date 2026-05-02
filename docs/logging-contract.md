# Logging Standard

## Stack

Loki + Promtail + Grafana (dev). В prod — managed Grafana Cloud или тот же stack в k8s.

## Правила для микросервисов

- Логи только в stdout/stderr (не в файлы)
- Формат: JSON (structured logging)
- Обязательные поля: timestamp, level, service, traceId, message
- Уровни: error / warn / info / debug

## Grafana

- URL (dev): http://localhost:3000
- Datasource: Loki → http://loki:3100
- Дашборды: infra/grafana/provisioning/dashboards/
