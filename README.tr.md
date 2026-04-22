# Grafana için Riverbed AppResponse Veri Kaynağı

English documentation: [README.md](README.md)

## Genel Bakış

Bu repo, Riverbed AppResponse için bir Grafana data source plugini içerir.
İçerik:

- **Frontend query editor** (TypeScript/React)
- **Backend binary** (Go, Grafana Plugin SDK)
- `plugin.json` üzerinden **proxy tabanlı** entegrasyon modeli
- Grafana 12.x ve 13.x için **Docker tabanlı local doğrulama** ortamı

Plugin şu anda Grafana 12/13 uyumluluğuna göre hizalanmıştır.

## Özellikler

- Riverbed AppResponse API'lerine Grafana datasource proxy route'ları üzerinden erişim
- Query editor tarafında çoklu source group desteği:
  - Application
  - Host Group
  - Web App
  - IP
  - SSL
  - Alerts
- Konfigüre edilebilir datasource ayarları:
  - Base path
  - Username
  - Password (secure field)
  - TLS skip verify seçeneği
- Datasource doğrulaması için backend health check endpoint'i

## Uyumluluk

- Grafana bağımlılık aralığı: `>=12.0.0 <14.0.0`
- Localde test edilen sürümler:
  - Grafana `12.3.6`
  - Grafana `13.0.x`
- Local geliştirme imzası: **unsigned** (Grafana ayarı ile izinli)

## Proje Yapısı

- `src/` frontend plugin kodları (`module.ts`, query/config editor, datasource mantığı)
- `pkg/` Go backend girişi ve health/query handler'ları
- `dist/` build çıktıları (frontend + backend binary)
- `docker/` local Grafana provisioning ve config dosyaları
- `.github/workflows/` CI ve release pipeline'ları

## Geliştirme

### Gereksinimler

- Node.js (LTS, güncel npm)
- Go toolchain
- Docker + Docker Compose

### Bağımlılık kurulumu

```bash
npm install
go mod tidy
```

### Frontend komutları

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
```

### Backend komutları

```bash
go run github.com/magefile/mage@latest buildAll
go test ./pkg/...
go build ./pkg/...
```

## Local Grafana Doğrulaması (12 + 13)

İki sürümü birlikte başlat:

```bash
docker compose up -d
```

Erişim:

- Grafana 12: <http://localhost:3001>
- Grafana 13: <http://localhost:3002>
- Varsayılan kullanıcı: `admin / admin`

Durdur:

```bash
docker compose down
```

Compose bağlantıları:

- plugin artifact: `./dist`
- provisioning: `./docker/provisioning`
- Grafana config: `./docker/grafana/grafana.ini`

`alidogan-appresponse-datasource` için unsigned plugin yüklemeye izin verilir.

## İmzalama

Dağıtım için plugin imzalama:

```bash
npm run sign
```

Gerekli ortam değişkeni:

- `GRAFANA_ACCESS_POLICY_TOKEN`

## Lisans

Apache-2.0
