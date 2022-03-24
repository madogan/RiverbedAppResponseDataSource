yarn build
mage -v
target='C:\\Users\\muham\\Desktop\\Projeler\\influxdbexporter\\volumes\\grafana\\plugins\\riverbed-appresponse-datasource\\'
mkdir -p $target
cp -r -f -v ./dist $target
cp -r -f -v ./src $target
cp -r -f -v ./package* $target
cp -r -f -v ./tsconfig.json $target
cp -r -f -v ./Magefile.go $target
cp -r -f -v ./go.sum $target
cp -r -f -v ./go.mod $target
docker restart influxdbexporter-grafana-1
