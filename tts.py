import requests
import json


########################################
# Config
########################################
voz = '7' # opções de voz: 1 (Feminina) e 2 (Masculina), 1 é o padrão
estilo = '3' # opções de estilo: 1, 2 e 3, 1 é o padrão
# tamanho da pausa em segundos entre frases, caso mais de uma frase seja gerada. 
# padrão é 0.5 segundos. Para forçar uma quebra de frase colocar \n
pausa = '0.1'
#tamanho máximo de uma frase em número de caracteres, frases maiores que esse número são quebradas
#preferencialmente em pontuações. Padrão é 160
tamanho_max = '160'
# formato do arquivo pode ser 'wav' ou 'ogg'. Padrão é wav
audio_format = 'ogg'

def text_to_speech(texto, voz = '1', estilo = '1', pausa = '0.5', tamanho_max = '160', audio_format = 'ogg'):
    url = 'http://mrfalante0cyber.ddns.net/api/{}/{}/{}/{}/{}/{}'.format(texto, voz, estilo, pausa, tamanho_max, audio_format) 
    resultado = requests.get(url).content
    print(url)
    return resultado


sentenca = "Fala Bruno,como você ta ? Um abraço você"
resultado = text_to_speech(sentenca, voz, estilo, pausa, tamanho_max)


nome_arquivo = 'resultado_TTS.ogg'
with open(nome_arquivo, "w+b") as fp:
    fp.write(resultado)
