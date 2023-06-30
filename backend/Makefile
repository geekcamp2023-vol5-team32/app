# 定数
GCP_PROJECT=geekcamp2023-vol5-team32
GCP_REGISTRY_HOST=asia.gcr.io
GCP_REGISTRY_IMAGE=liscript
GCP_REGION=asia-northeast1
GCP_SERVICE=liscript

IMAGE_PATH=${GCP_REGISTRY_HOST}/${GCP_PROJECT}/${GCP_REGISTRY_IMAGE}

build:
	docker build . -t ${IMAGE_PATH} --target prod

push:
	docker push ${IMAGE_PATH}

deploy:
	gcloud run deploy ${GCP_SERVICE} \
		--image ${IMAGE_PATH} \
		--project ${GCP_PROJECT} \
		--region ${GCP_REGION} \
		--quiet
