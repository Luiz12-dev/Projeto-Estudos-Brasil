# Evidências das curiosidades

Para cada entrada de `public/data/curiosidades.json`: a URL aberta durante a pesquisa e o trecho exato que sustenta cada dado do texto. Serve para a conferência humana antes de marcar `verificado: true` (CLAUDE.md, seção 7.1).

Como conferir: abra a URL, localize o trecho (Ctrl+F) e confirme que o texto da curiosidade não diz nada além do que o trecho diz.

## Lista de conferência

Depois de conferir uma entrada, marque `[x]` aqui e troque `"verificado": false` por `true` em `public/data/curiosidades.json`. Ou avise o agente quais UFs foram aprovadas.

| UF | Título | Atenção | Conferido |
|---|---|---|---|
| BR | A fome tem endereço e cor | Série de 2023 pode ter sido revisada pelo IBGE | [ ] |
| AC | Nem revolução, nem acreana? | — | [ ] |
| AL | Destruir Palmares dava prêmio | Localização em AL vem de outra fonte | [ ] |
| AP | Desterrados no Oiapoque | Número de presos em disputa | [ ] |
| AM | Os soldados esquecidos da borracha | Artigo trata da Amazônia em geral | [ ] |
| BA | Quilombo não é só passado | `ano` TODO | [ ] |
| CE | Campos de concentração no sertão | — | [ ] |
| DF | Quantos morreram na construção de Brasília? | `ano` TODO; dado em disputa | [ ] |
| ES | A revolta no dia da festa | Fonte é TCC (sem revisão por pares) | [ ] |
| GO | O brilho azul do césio-137 | — | [ ] |
| MA | Uma cidade quilombola | `ano` TODO | [ ] |
| MT | Uma doença antiga na fronteira nova | Ministério da Saúde/Fiocruz (fora da lista); `ano`: busca indica 2009, não conferido | [ ] |
| MS | Confinados em 60 hectares | — | [ ] |
| MG | O “trem de doido” de Barbacena | — | [ ] |
| PA | A revolução que dizimou a Amazônia | Total de mortos em disputa | [ ] |
| PB | O fim do cambão | — | [ ] |
| PR | O açoite que a lei manteve | Projeto de extensão UFPR; `ano` TODO | [ ] |
| PE | “Liga” era apelido | — | [ ] |
| PI | Quando o dono era o Estado | Conferir fim do período (1871) | [ ] |
| RJ | O cais que ficou enterrado | Número de desembarcados deixado de fora (disputa) | [ ] |
| RN | Os libertos que libertavam | E-book didático PIBID | [ ] |
| RS | O charque era feito por escravizados | — | [ ] |
| RO | A ferrovia que não valeu a pena | Observatório Fiocruz (fora da lista) | [ ] |
| RR | O estado mais indígena do país | — | [ ] |
| SC | Os “pelados” contra a ferrovia | Sem total de mortos (disputa) | [ ] |
| SP | 111 mortos no Carandiru | — | [ ] |
| SE | Cabeças em exposição | Data do sepultamento em disputa (1969 × 1971) | [ ] |
| TO | Guias à força | Sem total de mortos (disputa) | [ ] |


## BR — A fome tem endereço e cor

Fonte: IBGE, *Pesquisa Nacional por Amostra de Domicílios Contínua — Segurança alimentar 2023* (© IBGE 2024). PDF: https://biblioteca.ibge.gov.br/visualizacao/livros/liv102084.pdf

- 3,2 milhões / 4,1%: "Neste período, a proporção de domicílios em IA leve foi de 18,2%, já 5,3% dos domicílios particulares estavam em IA moderada e 4,1% em IA grave [...] cerca de 3,2 milhões de domicílios passaram por privação quantitativa de alimentos [...] a fome esteve presente entre eles, pelo menos, em alguns momentos do período de referência de 3 meses."
- Norte × Sul: "A Região Norte teve cerca de quatro vezes mais domicílios convivendo com a restrição severa de acesso aos alimentos, ou seja, com IA grave, quando comparada com a Região Sul (7,7% contra 2,0%)."
- Cor ou raça: "Para casos de IA grave a participação de domicílios com pessoa responsável de cor ou raça parda passa para 58,1%, mais que o dobro da parcela que representa os domicílios cujo responsável é de cor ou raça branca, 23,4%."

Atenção na conferência: buscas indicam que edições posteriores do IBGE revisaram a série de 2023. O texto usa os números desta publicação.

## BA — Quilombo não é só passado

Fonte: IBGE Educa, página "Quilombolas". https://educa.ibge.gov.br/jovens/conheca-o-brasil/populacao/22327-quilombolas.html — a página não mostra data de publicação (campo `ano` deixado como TODO).

- "Entre as Unidade da Federação, a Bahia é a que apresenta o maior quantitativo de quilombolas: 397.059 pessoas, correspondendo a 29,90% da população quilombola."
- "O município de Senhor do Bonfim/BA possui o maior número de pessoas quilombolas (15.999). Na sequência: Salvador/BA, com 15.897, Alcântara/MA, com 15.616, e Januária/MG, com 15.000."
- "[...] 12,6% dos quilombolas residentes no Brasil ocupam territórios oficialmente delimitados e 87,4% estão fora de áreas formalmente delimitadas e reconhecidas."

## CE — Campos de concentração no sertão

Fonte: NEVES, Frederico de Castro. "Getúlio e a seca: políticas emergenciais na era Vargas". *Revista Brasileira de História*, 21 (40), 2001. https://doi.org/10.1590/S0102-01882001000100006 — URL usada: https://www.scielo.br/j/rbh/a/5GNSQTXnMM7kTM3rr8B4TrM/?format=html&lang=pt

- "Assim, um amplo programa de criação de campos de concentração, em que os retirantes fossem induzidos a entrar e proibidos de sair, foi implementado com total apoio da Interventoria Federal no Ceará. A fim de prevenir a 'afluência tumultuária' de retirantes famintos a Fortaleza, cinco campos localizavam-se nas proximidades das principais vias de acesso à capital [...]"
- "Uma vez dentro do campo, o retirante era obrigado não só a permanecer nele durante todo o período considerado de seca, mas deveria submeter-se a condições de moradia, relacionamento, trabalho e comportamento regulados [...] através da concessão de rações diárias e de assistência médica."
- "[...] o maior campo, na cidade do Crato, chegou a abrigar quase 60 mil pessoas [...]"

A segunda pergunta ("por que é pouco conhecido") é um convite à discussão, não uma afirmação factual.

## GO — O brilho azul do césio-137

Fonte: VIEIRA, Suzane de Alencar. "Césio-137, um drama recontado". *Estudos Avançados*, 27 (77), 2013. https://doi.org/10.1590/S0103-40142013000100017 — URL usada: https://www.scielo.br/j/ea/a/pWxC3bW79km3cRFB83DXX3B/?lang=pt

Observação: o artigo se define como "experimento textual" baseado em personagens e acontecimentos reais. Só foram usados fatos que o texto afirma diretamente.

- "No mês de setembro de 1987, o despojo de equipamentos abandonados nas ruínas do Instituto despertou a curiosidade e o interesse de dois moradores do Bairro Popular [...] Os dois rapazes, que estavam temporariamente sem emprego [...] A peça de chumbo foi vendida para Devair, dono de um ferro-velho [...] a cápsula indeterminada foi incluída na transação."
- "Nas noites de setembro de 1987, o césio-137 emanava uma deslumbrante luz azul [...] circulava de mão em mão como uma dádiva maravilhosa [...]"
- "A menina Leide das Neves de seis anos havia recebido do pai [...] algumas pedrinhas azuis de césio-137 para brincar. A criança foi contaminada ao comer ovo cozido com as mãos sujas do pó radioativo durante o jantar." / "Maria Gabriela e a criança Leide das Neves não suportaram a excessiva dose de radiação [...] e morreram [...]"
- "Somente em 1991 foi construído o depósito definitivo de rejeitos radioativos em Abadia de Goiás [...] a radiação e o potencial de contaminação permanecerão ativos por, pelo menos, 300 anos [...]"
- Para a pergunta: "Nos três anos em que permanecera abandonada (1985 a 1987), a cápsula não fora objeto de nenhum ato de fiscalização da Comissão Nacional de Energia Nuclear (CNEN)."

## MA — Uma cidade quilombola

Fonte: IBGE Educa, página "Quilombolas". https://educa.ibge.gov.br/jovens/conheca-o-brasil/populacao/22327-quilombolas.html — sem data de publicação visível (campo `ano` como TODO).

- "O município de Alcântara/MA se destaca por ter a maior parte de sua população sendo quilombola; pois dos 18.466 habitantes, 15.616 (84,57%) são pessoas quilombolas."
- "Em segundo lugar está o Maranhão, com 269.074 pessoas quilombolas, o que corresponde a 20,26% da população quilombola. Estas duas Unidades somadas representam 50,16% de toda a população quilombola do Brasil."

O texto tem 3 frases; pode precisar de uma quarta linha para atingir o mínimo de 4 linhas do schema.

## MG — O “trem de doido” de Barbacena

Fonte: MATOS-DE-SOUZA, Rodrigo; MEDRADO, Ana Carolina Cerqueira. "Dos corpos como objeto: uma leitura pós-colonial do 'Holocausto Brasileiro'". *Saúde em Debate*, 45 (128), 2021. https://doi.org/10.1590/0103-1104202112813 — URL usada: https://www.scielo.br/j/sdeb/a/v9vGDrqDPfQt3KJkS5Kjndc/?lang=pt

Dado em disputa: os 60 mil são a estimativa do livro de Daniela Arbex, retomada pelo artigo. Por isso o texto atribui o número ao livro. Buscas mostram fontes com períodos diferentes para essas mortes, então o texto não informa período.

- "O livro 'Holocausto Brasileiro', da jornalista Daniela Arbex, publicado em 2013, conta a história do Hospital Colônia, localizado em Barbacena (MG). Nesse hospital morreram cerca de 60 mil pacientes [...] exposição ao frio - muitos não dispunham de roupas, quartos, camas ou lençóis para dormir [...] alimentação racionada [...] 'tratamentos' violentos, à base de eletrochoque [...] os corpos dos pacientes mortos eram vendidos para as faculdades de medicina [...]"
- Citando Arbex: "Os deserdados sociais chegavam a Barbacena de vários cantos do Brasil. Eles abarrotavam os vagões de carga [...] A expressão 'trem de doido' surgiu ali."
- "[...] período da ditadura militar, no Brasil, em que os hospitais psiquiátricos recebiam diária por cada paciente internado. Isso fez com que o número de leitos em tais hospitais saltasse de 14 mil, no início da ditadura, para cerca de 70 mil, em 1970."

## RR — O estado mais indígena do país

Fonte: IBGE, *Censo Demográfico 2022 — Identificação étnico-racial da população, por sexo e idade: resultados do universo* (Rio de Janeiro, 2023). PDF: https://biblioteca.ibge.gov.br/visualizacao/periodicos/3105/cd_2022_etnico_racial.pdf

- "Analisando o total de pessoas indígenas, ou seja, considerando a soma dos declarados pelos quesitos de cor ou raça e se considera indígena, as três Unidades da Federação que mostraram a maior concentração de indígenas na sua população residente foram Roraima, com 15,4% de sua população residente indígena, seguida do Amazonas, com 12,5%, e do Mato Grosso do Sul, com 4,2%. Rio de Janeiro e São Paulo apresentavam o menor peso relativo de população indígena, ambas com 0,1%."
- "[...] a população residente no Brasil é formada por 92 083 286 pessoas pardas (45,3%), 88 252 121 brancas (43,5%), 20 656 458 pretas (10,2%), 1 694 836 indígenas (0,8%) e 850 130 amarelas (0,4%)."

## SC — Os “pelados” contra a ferrovia

Fonte: KARSBURG, Alexandre de Oliveira; MACHADO, Paulo Pinheiro; VALENTINI, Delmir José. Apresentação do dossiê "Centenário do Contestado". *Revista Esboços* (PPG em História da UFSC), v. 19, n. 28, p. 1-12, dez. 2012. PDF: https://periodicos.ufsc.br/index.php/esbocos/article/download/2175-7976.2012v19n28p1/25643/104106

Não há total de mortos: a fonte não traz estimativa geral e as buscas só mostraram números parciais ou sem método.

- "[...] um conflito que, em diferentes fases e com características próprias, estendeu-se até o início de 1916. A Guerra do Contestado colocou de um lado os 'peludos' representados pelos governos (estaduais e federal) os grandes fazendeiros, os representantes da estrada de ferro Southern Brazil Railway e da Lumber and Colonization Company e, de outro, peões, agregados, tropeiros, ervateiros, médios e pequenos sitiantes, que se autodenominaram 'pelados'."
- "O conflito atingiu um grande território do planalto e meio-oeste catarinense, além do sul do Paraná."
- "Demandas econômicas e sociais, como a luta pela terra e pela emancipação da tutela dos Coronéis, estão presentes [...]"
- "[...] entre os anos de 1912 a 1916, a Guerra do Contestado mobilizou a sociedade nacional no combate aos chamados 'fanáticos', termo de época carregado de preconceitos e felizmente hoje em desuso."

## SP — 111 mortos no Carandiru

Fonte: FERREIRA, Luisa M. A.; MACHADO, Marta R. de A.; MACHADO, Maíra Rocha. "Massacre do Carandiru: vinte anos sem responsabilização". *Novos Estudos CEBRAP*, n. 94, nov. 2012 (seção Opinião). https://doi.org/10.1590/S0101-33002012000300001 — URL usada: https://www.scielo.br/j/nec/a/ZbWF3kvfSYJMQCMSN9ZfmFt/?lang=pt

- "[...] o que aconteceu na tarde do dia 2 de outubro de 1992 [...]"
- "[...] relatório da operação 'para conter a Rebelião na casa de detenção' [...] A tropa de choque, segundo o documento, teve autorização para a entrada no pavilhão [...]"
- "Dos 111 mortos, 93 receberam três ou mais disparos [...]"
- "Em março de 1993, o promotor de justiça militar Luiz Roque Lombardo Barbosa ofereceu denúncia contra 120 policiais militares envolvidos no massacre [...]"
- "Passados vinte anos, nenhuma autoridade competente foi capaz de atribuir responsabilidades pelo Massacre do Carandiru."
- "[...] os processos civis de indenização pelos danos materiais e morais foram concluídos integralmente somente para vinte e seis dos familiares das 111 vítimas."
- Autoria ligada à FGV: "[...] pesquisa conduzida pelas autoras [...] no Núcleo de Estudos sobre o Crime e a Pena da Direito GV [...]"

Atenção: o texto descreve a situação de 2012. Fatos posteriores (julgamentos, anulações) não foram verificados e não entram no texto.

## AM — Os soldados esquecidos da borracha

Fonte: NEVES, Frederico de Castro. "Getúlio e a seca: políticas emergenciais na era Vargas". *Revista Brasileira de História*, 21 (40), 2001. URL usada: https://www.scielo.br/j/rbh/a/5GNSQTXnMM7kTM3rr8B4TrM/?format=html&lang=pt

- "[...] o governo criou, em novembro de 1942, o SEMTA (Serviço Especial de Mobilização de Trabalhadores para a Amazônia) com o 'objetivo de alistar e recrutar trabalhadores para a Batalha da Borracha'. A especial coincidência de tais efeitos e necessidades da guerra e a eclosão de mais uma seca fez com que a sede do novo órgão fosse instalada em Fortaleza, onde mais facilmente se poderiam encontrar 'flagelados candidatos a seringueiros'."
- "[...] os seringais da Amazônia retornaram ao centro do comércio internacional da borracha devido à expansão bélica japonesa sobre as áreas de produção na Ásia."
- "[...] construíam a idéia de uma Amazônia ideal, terra da 'promissão', da 'fartura' e da 'esperança' [...] os retirantes eram alistados e preparados como soldados que iriam se deparar com uma 'batalha' [...] O fim da guerra iria demonstrar o contrário: o soldado foi esquecido, e o campo de batalha, abandonado."

Atenção: o artigo fala da Amazônia em geral (destinos citados: Belém e Manaus), não só do Amazonas. Se preferir, esta entrada pode ir para o Acre ou o Pará. A segunda parte da pergunta é um convite à discussão: a fonte não descreve as condições nos seringais.

## ES — A revolta no dia da festa

Fonte: FLORENTINO, Aline Birchener Villa Nova. *Insurreição do Queimado: um grito de luta e resistência contra a escravidão no século XIX*. Trabalho de Conclusão de Curso (Licenciatura em História), UFES, 2024. PDF: https://repositorio.ufes.br/server/api/core/bitstreams/be30139d-f403-4ba1-b74c-4f1313905e5a/content

**Atenção: é um TCC de graduação, de universidade pública, mas sem revisão por pares.** Avalie se é suficiente ou se vale buscar artigo ou livro, como o de Afonso Cláudio, citado no TCC.

- "O movimento aconteceu em 1849, na freguesia do Queimado, área que pertencia a Vitória, mas que hoje está localizada na Serra."
- "E nesse dia 19 de março de 1849 [...] Um grupo de negros escravizados armados adentrou a igreja e aos gritos proclamavam a liberdade por meio de uma alforria que teriam direito em função do trabalho que tinham realizado no próprio templo. Entendiam que o trabalho dispendido na construção usando suas folgas e dias santos indenizaria seus senhores [...]"
- "Narrado o episódio por um jornal da época que o grupo revoltoso chegou a trezentas pessoas. [...] a revolta foi rapidamente retaliada gerando mortos e prisioneiros, pois agiram de maneira extremamente violenta."
- "Para cinco deles foi sentenciada a pena capital já que foram considerados 'mentores' do movimento. Outros 25 foram sentenciados à açoites e seis foram absolvidos."

Dado em disputa: buscas mostram outra fonte com cerca de 200 participantes. Por isso o texto atribui os 300 ao jornal da época.

## MS — Confinados em 60 hectares

Fonte: LOURENÇO, Renata. "A Missão Evangélica Caiuá e a educação escolar para os indígenas da Reserva de Dourados e aldeia do Panambizinho – de 1928 a 1968". *Fronteiras*, Dourados, v. 12, n. 21, p. 125-150, jan./jun. 2010. PDF: https://ojs.ufgd.edu.br/FRONTEIRAS/article/download/598/715/3060

- "A Reserva de Dourados foi criada pelo Decreto n. 404, de 03 de setembro de 1917, compreendendo uma área de 3.539 hectares. A área foi reservada especificamente para abrigar índios Guarani. Cabe ressaltar que a demarcação de tal Reserva não seguiu qualquer critério referenciado ao território e ocupação tradicional Guarani [...]"
- "[...] processo de colonização que teve início com a criação da Colônia Agrícola Nacional de Dourados (CAND), promovida pelo governo federal a partir da década de 1940."
- "A criação da CAND teve um profundo impacto na vida dos Kaiowá, os quais passaram a conviver em disputa permanente com os novos colonos, trazidos para ocupar os lotes de terra, antes pertencentes aos índios Kaiowá."
- "[...] aproximadamente 280 índios, somente da etnia Kaiowá, permaneceram confinados em 60 hectares, lutando até a obtenção de parte de suas terras, que lhes foram devolvidas somente no final de 2004, quando foram homologados 1.260 hectares como Terra Indígena para esta população."

A pergunta fala em "mais de 60 anos", contados da década de 1940 até 2004.

## PB — O fim do cambão

Fonte: ALVES, Juliana Ferreira. *Violência entre (des)iguais: memórias silenciadas nas lutas da Liga Camponesa de Sapé-PB (1962-1964)*. Dissertação (Mestrado em História), UFPB, agosto de 2019. PDF: https://repositorio.ufpb.br/jspui/bitstream/123456789/19966/1/JulianaFerreiraAlves_Dissert.pdf

- Nota 3: "Cambão era o modo de exploração que consistia em trabalhos gratuitos realizados pelos camponeses (morador e foreiro) para os proprietários de terra. Os dias de trabalhos cedidos para o dono da terra (poderia ser um, dois ou mais dias de serviço), variando muito de uma fazenda para outra."
- "[...] problemas imediatos, isto é, no fim do cambão, indenizações em caso de desapropriação das terras, melhores condições de trabalho, etc., até porque tratava-se de concepções pregadas por João Pedro [...]"
- "João Pedro Teixeira, brutamente assassinado a mando do Grupo da Várzea em 02 de abril de 1962. Há um sentimento de impunidade presente nesse crime que teve como executores o vaqueiro Arnaud Nunes Bezerra (Arnaud Claudino) e os policiais Antônio Alexandre da Silva (Gago) e Francisco Pedro da Silva (Chiquinho). Este último foi quem acusou Agnaldo Veloso Borges como mandante do atentado [...]"
- "[...] o homicídio adveio numa emboscada na estrada que liga Café do Vento a Sapé, quando João Pedro retornava da capital João Pessoa [...]"

Atenção: a fonte não diz a profissão de Agnaldo Veloso Borges (buscas mencionam "usineiro"), então o texto não o qualifica. A dissertação também registra que, na época, as suspeitas recaíram sobre outras pessoas.

## RJ — O cais que ficou enterrado

Fonte: CARNEIRO, Sandra de Sá; PINHEIRO, Márcia Leitão. "Cais do Valongo: patrimonialização de locais, objetos e herança africana". *Religião & Sociedade*, 35 (2), jul.-dez. 2015. https://doi.org/10.1590/0100-85872015v35n2cap16 — URL usada: https://www.scielo.br/j/rs/a/bCPNfFkbtrHvWDMwWmj66XG/?lang=pt

- "Com efeito, em 1843, no mesmo local tinha sido reconstruído o Cais da Imperatriz que, por sua vez, foi soterrado pela Reforma Pereira Passos, dando lugar à Praça do Comércio."
- Placa citada no artigo: "Em 1843 o antigo Cais do Valongo foi alargado e embelezado, para receber a futura imperatriz Teresa Cristina que chegava para casar com D. Pedro II."
- "Redescoberto em 2011, já no curso do Projeto Porto Maravilha [...]"
- "[...] estatuetas que pareciam relacionadas a cultos promovidos pelos africanos que desembarcaram ali e logo foram escravizados."
- Fala da arqueóloga Tânia Andrade Lima, citada no artigo: "[...] nós convidamos yalorixás que estão nos ajudando a interpretar este material."

Dado em disputa, que ficou fora do texto: buscas mostram estimativas muito diferentes do número de africanos desembarcados no Valongo (de cerca de 1 milhão a valores maiores). Se quiser incluir um número, ele precisa de fonte que mostre a divergência.

## AC — Nem revolução, nem acreana?

Fonte: COSTA, Ana Luiza Souza da; MACHAREL, Thales Silva. "Que história é essa? Que história não é essa? A memória selecionada dos patrimônios históricos no Acre". *Das Amazônias*, Rio Branco, v. 7, n. 2, jul.-dez. 2024, p. 187-212. PDF: https://periodicos.ufac.br/index.php/amazonicas/article/download/7500/4874/30059

- "Plácido de Castro foi o líder de um movimento armado, patrocinado pelo governo do Amazonas, esse movimento foi responsável pela anexação do território do Acre ao Brasil [...]"
- "A conflagração em questão iniciou-se em 6 de agosto de 1902, data da independência da Bolívia, lutaram do lado brasileiro seringueiros nordestinos, que constituíam a maioria de todo o contingente brasileiro deste conflito no Acre [...] todos comandados por Plácido [...]"
- "[...] Plácido de Castro, um gaúcho em seus trajes de campanha [...]"
- "O que não se costuma falar ao contar essa história é que a maioria dos seringueiros lutaram obrigados [...] os seringueiros lutavam por ser essa a ordem de seus patrões, dos seringalistas [...] O Acre era território boliviano [...]"
- "No provocativo título de seu livro, 'Não foi revolução nem acreana', Eduardo de Araújo Carneiro deixa explícito a essa questão [...]"

Atenção: é uma interpretação dos autores, por isso o texto usa "pesquisadores lembram". O texto diz "muitos seringueiros" onde a fonte diz "a maioria", uma escolha mais cautelosa. A palavra "Rio Branco" na pergunta vem do artigo, que analisa os espaços de memória da capital.

## AL — Destruir Palmares dava prêmio

Fonte: MARQUES, Dimas Bezerra. *Pelo bem de meus serviços, rogo-lhe esta mercê: a influência da guerra de Palmares na distribuição de mercês (Capitania de Pernambuco, 1660-1778)*. Dissertação (Mestrado em História), UFAL, Maceió, 2014.

- Resumo: "Os Mocambos de Palmares duraram mais de um século. As primeiras tentativas de destruição por parte do governo da Capitania de Pernambuco datam de 1602. [...] durante a segunda metade do século XVII várias expedições militares foram mandadas para combater os Palmares, levando consigo centenas de soldados. [...] Muitos desses prêmios foram requeridos e ganhos através dos serviços prestados nesses conflitos [...] os bandeirantes paulistas foram chamados a combater nos Palmares, contribuindo com sua destruição. Nesse sentido, ganharam mercês, o que incluía extensos lotes de terra na região palmarina, o que lhes garantiu bases para o enraizamento em Pernambuco."
- Tipos de mercê: "São solicitações de Hábitos, cargos administrativos, sesmarias [...]"
- "[...] sobreviventes, que ainda resistiram durante o século XVIII."

**Localização em Alagoas:** esta fonte não diz explicitamente que Palmares ficava no atual território alagoano. Outra dissertação da UFAL, aberta durante a pesquisa, diz: "[...] cujo principal mocambo foi o de Macacos localizado na atual Serra da Barriga [...]" e "[...] situava-se na atual Serra da Barriga, em União dos Palmares [...]" (LIMA, Marcia Susana Gonçalves. *A história do Quilombo dos Palmares na política curricular do município de União dos Palmares*, UFAL — https://www.repositorio.ufal.br/bitstream/123456789/8083/1/A%20hist%C3%B3ria%20do%20Quilombo%20dos%20Palmares%20na%20pol%C3%ADtica%20curricular%20do%20munic%C3%ADpio%20de%20Uni%C3%A3o%20dos%20Palmares.pdf). Por isso o texto não usa o nome "Alagoas". A segunda pergunta (concentração de terras) é um convite à discussão, não uma afirmação da fonte.

## AP — Desterrados no Oiapoque

Fonte: PAZ, Adalberto. "Muitos sujeitos, outros governos, nenhuma pátria: fugitivos, autoridades e disputas territoriais na Amazônia entre os séculos XIX e XX". In: *Trabalhadores, migrações e natureza no Brasil equatorial*. Macapá: UNIFAP, 2018 (ISBN 978-85-5476-016-8). PDF: https://www2.unifap.br/editora/files/2018/05/Livro-Trabalhadores-Migra%C3%A7%C3%B5es-e-Natureza-no-Brasil-Equatorial.pdf

- "[...] seria apenas no início da década de 1920 que o governo brasileiro enviaria uma comissão ao Amapá, no intuito de estabelecer as bases para uma experiência agrícola efetiva naquela região de fronteira. [...] a maioria dos quais eram cearenses atingidos pela grande seca de 1915-1919 – que ocupariam o Núcleo Colonial Cleveland."
- "Em pouco tempo, porém, Cleveland integrou a longa lista de fracassos em colônias agrícolas no Pará. [...] Transformada em colônia penal, Clevelândia do Norte passou a ser o destino de muitos dissidentes, anarquistas, comunistas e demais 'indesejáveis' ao poder público em regime de exceção, a partir da chamada Revolução de 1924."
- "[...] segundo Paulo Sérgio Pinheiro, um relatório encaminhado ao Ministro da Agricultura de Artur Bernardes informava 'que, em 1926, dos 946 prisioneiros desterrados para Clevelândia, 444 haviam morrido'."
- "Após 1927, com o fim do estado de sítio [...]"

Dado em disputa: buscas mostram outras contagens de presos (948 no relatório oficial de Oldemar Murtinho, 1.630 segundo Manoelzinho dos Santos). Por isso o texto atribui os números ao relatório citado.

## DF — Quantos morreram na construção de Brasília?

Fonte: SOUSA, Nair Heloisa Bicalho de. "O massacre da Pacheco Fernandes Dantas em 1959: memória dos trabalhadores da construção civil de Brasília". PDF: https://unb.revistaintercambio.net.br/24h/pessoa/temp/anexo/1/1251/2053.pdf — a autora é apresentada como "Professora da Universidade de Brasília". O ano de publicação não aparece no texto (cita trabalhos de 2011, então é posterior a isso); campo `ano` como TODO. Outra cópia do mesmo texto: http://www.derhuman.jus.gov.ar/conti/2011/10/mesa_11/bicalho_mesa_11.pdf

**Dado em disputa** (seção 7 do CLAUDE.md): o texto mostra as três contagens e quem as fez.

- "O massacre dos operários da construção civil no acampamento da construtora Pacheco Fernandes Dantas no carnaval de 1959, ignorado pela história oficial da cidade [...]"
- Citando *O Binômio* (16/02/1959): "início da tarde de domingo (dia 8 de fevereiro de 1959) quando alguns operários reclamaram da péssima qualidade da comida e a falta (constante de água). [...] o que levou o chefe de obras a solicitar a 'Polícia da NOVACAP' [...]"
- Depoimento: "Quando foi na base de dez para onze hora, aí chegou o caminhão cheinho (de soldados) que era da GEB."
- "[...] a Guarda Especial de Brasília."
- "O Jornal do Brasil (14/02/1959), A Notícia (13/02/1959) do Rio de Janeiro e O Estado de São Paulo (14/02/1959) registraram a ocorrência de uma morte, sustentados nas informações das autoridades da NOVACAP."
- "Um ponto polêmico está em torno do número de mortos: os grandes jornais registram 1 a 2, conforme apontado acima, outros jornais falam em 9, mas depoimentos de trabalhadores da época e de Jorge Santos vai muito além. [...] 'Nenhum dos operários falou em menos de 50. Houve quem estimasse 120.'"

## MT — Uma doença antiga na fronteira nova

Fonte: PENNA, Maria Lucia Fernandes; GROSS, Maria Aparecida de Faria; ROCHA, Margarida Cristiana Napoleão; PENNA, Gerson Oliveira. "Comportamento epidemiológico da hanseníase no Brasil". Capítulo 12 de *Saúde Brasil 2008: 20 anos de Sistema Único de Saúde (SUS) no Brasil*, Secretaria de Vigilância em Saúde/Ministério da Saúde. PDF no repositório Arca/Fiocruz: https://api.arca.fiocruz.br/api/core/bitstreams/f6b7f0c7-96f5-4a46-921e-5a4e7c555755/content — o ano de publicação não aparece no trecho (o capítulo analisa 1980-2009), então o campo `ano` ficou como TODO. Uma busca indica que o livro *Saúde Brasil 2008* foi impresso em 2009 (Ministério da Saúde, ISBN 978-85-334-1600-0), mas o PDF oficial (https://bvsms.saude.gov.br/bvs/publicacoes/saude_brasil_2008.pdf) não abriu no ambiente do agente: confira antes de preencher.

- "As áreas dos clusters na região Amazônica coincidem com áreas de projetos de assentamento e de polos de desenvolvimento agropecuário. No censo de 1980, não haviam nascido no estado de residência 35,5% da população no Mato Grosso e 40,7% em Rondônia. A densidade demográfica passou de 0,15 habitante por km2, em 1950, para 5,8 habitantes/km2 em 2000, em Rondônia; e de 0,42 para 2,47, nos mesmos anos, em Mato Grosso [...]"
- "Apresentam taxa de detecção, em menores de 15 anos, maior do que dez casos por 100 mil habitantes os estados de Rondônia, Pará, Tocantins, Maranhão, Piauí, Pernambuco e Mato Grosso, refletindo transmissão recente do bacilo."

Fonte complementar aberta, fora do texto: o artigo de Tavares (*Einstein*, 2021, https://www.scielo.br/j/eins/a/sFYSvJxNsH3MF3W4ydfzSnd/?lang=pt) diz que MT ocupa "a primeira posição, com as maiores taxas de prevalência e incidência da doença no país". Isso não entrou no texto porque o schema aceita só uma fonte.

## PA — A revolução que dizimou a Amazônia

Fonte: RICCI, Magda. "Cabanagem, cidadania e identidade revolucionária: o problema do patriotismo na Amazônia entre 1835 e 1840". *Tempo*, 11 (22), 2007. https://doi.org/10.1590/S1413-77042007000100002 — URL usada: https://www.scielo.br/j/tem/a/ZX5z5skg9g7YyC47qtn533N/?lang=pt

- "A revolução social dos cabanos que explodiu em Belém do Pará, em 1835, deixou mais de 30 mil mortos e uma população local que só voltou a crescer significativamente em 1860. Este movimento matou mestiços, índios e africanos pobres ou escravos, mas também dizimou boa parte da elite da Amazônia."
- "[...] a Cabanagem normalmente foi, e ainda é, analisada como mais um movimento regional [...] Eles se autodenominavam 'patriotas' [...] Indígenas, negros de origem africana e mestiços perceberam lutas e problemas em comum."
- "Toda a chacina populacional da Cabanagem, entre 1835 e 1840 [...]"

Dado em disputa: buscas mostram estimativas de 30 a 40 mil mortos em outras fontes. O texto atribui o número à autora. A pergunta compara com o Sudeste, o que é um convite à discussão, não uma afirmação da fonte.

## PE — “Liga” era apelido

Fonte: DEZEMONE, Marcus. "A questão agrária, o governo Goulart e o golpe de 1964 meio século depois". *Revista Brasileira de História*, 36 (71), jan.-abr. 2016. https://doi.org/10.1590/1806-93472016v36n71_006 — URL usada: https://www.scielo.br/j/rbh/a/R85xbJj5tVgt6YSDphF5gZS/?lang=pt

- "A primeira 'Liga' teria surgido em 1955 no Engenho Galileia, em Vitória de Santo Antão, na Zona da Mata pernambucana. Rapidamente o modelo de organização como associação civil, sem o reconhecimento oficial do Estado, expandiu-se, chegando a outros estados."
- "O primeiro foi a luta contra o cambão - o trabalho não remunerado nos engenhos [...] Prática comum havia muitos anos, o cambão passou a ser visto como um problema quando os proprietários começaram a cobrar mais dias [...]"
- "O próprio termo 'Liga' foi adotado pela imprensa conservadora de Pernambuco para remeter o movimento dos anos 1950 às Ligas Comunistas da década de 1940. O nome da organização criada no Engenho Galileia em 1955 era 'Sociedade Agrícola e Pecuária dos Plantadores de Pernambuco' (SAPPP). Do conteúdo pejorativo inicialmente atribuído, o termo 'Liga' acabou incorporado e difundido pelo movimento."
- Período: "[...] da existência daquelas entidades, de 1955 a 1964."

Atenção: o artigo diz que a primeira Liga "teria surgido" em 1955. Buscas mostram fontes que dão 1954. O texto mantém 1955 para o nome SAPPP, que o artigo afirma sem ressalva. A entrada da PB também fala do cambão, mas com outro foco.

## PI — Quando o dono era o Estado

Fonte: CARVALHO, Genimar M. R. de; LIMA, Solimar Oliveira. "Escravidão e construção civil: negros da Nação nas obras públicas de Teresina (1850-1871)". *Informe Econômico* (UFPI), ano 13, n. 28, nov. 2012. PDF: https://periodicos.ufpi.br/index.php/ie/article/download/1908/1735/5464

- "[...] eram todos trabalhadores enviados das fazendas nacionais, as quais originaram-se do legado deixado por Domingos Afonso Sertão, após sua morte em 1711, aos padres inacianos. Acrescidas de outras propriedades, totalizaram 39 fazendas em 1760, ano da expulsão dos jesuítas, quando passaram a chamar-se Fazendas do Real Fisco ou simplesmente Fazendas do Fisco. [...] Após a independência do Brasil em 1822, estas propriedades passaram a denominar-se Fazendas da Nação ou Nacionais, mantendo a mesma estrutura e o assentamento no trabalho escravo. Em 1844, as propriedades da Inspeção Canindé passaram à posse do conde e condessa de Áquila, sendo esta última irmã do imperador D. Pedro II e as recebido como dote [...]"
- "Entre estes primeiros trabalhadores que deram início ao processo de construção das obras públicas de Teresina, estavam os escravizados nacionais [...]"
- "Percebe-se na documentação pesquisada uma frequência considerável de pedidos ou ordens de devolução de trabalhadores escravizados às fazendas nacionais [...] a motivação principal das devoluções de escravizados para as fazendas nacionais, parece ter sido o não aprendizado, propositadamente, de um ofício, como forma de resistência."

O período termina em 1871 por causa do recorte do título (1850-1871). Buscas indicam que os escravizados da Nação foram libertados pela Lei n.º 2.040, de 1871, mas isso não está no trecho conferido. **Confirme ou mude o fim do período.**

## PR — O açoite que a lei manteve

Fonte: Projeto de Extensão Afro Curitiba (UFPR), página "Cadeia e Pelourinho: histórias de escravidão". https://afrocuritiba.ufpr.br/praca-borges-de-macedo/ — sem data de publicação visível (campo `ano` como TODO).

- "Na atual Praça Borges de Macedo, duas referências nos dizem algumas coisas sobre as experiências vividas por pessoas escravizadas na cidade de Curitiba. [...] Um deles é o monumento que rememora o pelourinho."
- "Na memória contemporânea, entretanto, o Pelourinho tornou-se um símbolo da escravidão [...]" / "Se o Pelourinho servia para aplicação de penas de pessoas livres tanto quanto de escravos, porque então, na memória contemporânea, o Pelourinho é tão diretamente associado à opressão praticada contra os escravizados [...]?"
- Constituição de 1824, art. 179, citada na página: "XIX. Desde já ficam abolidos os açoites, a tortura, a marca de ferro quente, e todas as mais penas cruéis"
- Código Criminal de 1830, art. 60, citado na página: "Se o réu for escravo, e incorrer em pena, que não seja a capital, ou de galés, será condenado na de açoutes, e depois de os sofrer, será entregue a seu senhor, que se obrigará a trazê-lo com ferro, pelo tempo e maneira que o Juiz designar. O número de açoutes será fixado na sentença; e o escravo não poderá levar por dia mais de cinquenta."

Atenção: a página traz datas que se contradizem sobre o pelourinho ("Erigido em Curitiba em 1698, antes mesmo que fosse instalada a Câmara – o que ocorreu somente em 1693"). Por isso o texto não informa quando o pelourinho foi erguido. O texto da Constituição está no art. 179, que trata dos direitos dos cidadãos, daí a pergunta.

## RN — Os libertos que libertavam

Fonte: COSTA, Aryana Lima; FALCÃO, Marcilio Lima (orgs.). *30 de Setembro: por uma história da libertação*. Mossoró: Edições UERN, 2024 (PIBID História UERN). PDF: https://portal.uern.br/wp-content/uploads/sites/14/2024/09/E-book-30-de-Setembro-por-uma-historia-da-libertacao.pdf

**Atenção:** é um material didático do PIBID, organizado por professores da UERN (universidade estadual pública), sem revisão por pares.

- "O dia 30 de setembro de 1883 representa uma das datas mais importantes da Cidade de Mossoró, no Rio Grande do Norte. É nesse dia em que todos os escravizados da cidade são libertados oficialmente [...]"
- "Apesar da Sociedade Libertadora Mossoroense ter sido extremamente importante na luta pela liberdade dos escravizados mossoroenses, ela não atuou sozinha. Atrelada à Libertadora Mossoroense estava o pouco conhecido Clube dos Spartacus [...] composto principalmente por ex-escravizados que, diferentemente dos membros da Libertadora, utilizavam-se de sua força braçal [...] O clube tinha como presidente Rafael Mossoroense da Glória, ex-escravizado [...] o auxílio em fugas, o enfrentamento a capitães do mato, armações de emboscadas, transporte de libertos e escravizados fugitivos para a província do Ceará em comboios [...]"

O texto chama a Libertadora de "elite" com base neste trecho: "Seus membros eram majoritariamente homens brancos, figuras políticas e socioeconomicamente favorecidas, fator que possibilitou a compra de várias alforrias." A data da Lei Áurea não está na fonte, por isso entrou só como pergunta.

## RO — A ferrovia que não valeu a pena

Fonte: Observatório História e Saúde (Casa de Oswaldo Cruz/Fiocruz), "O avanço sobre a Amazônia: exploração econômica e doenças", publicado em 03/04/2023. https://ohs.coc.fiocruz.br/posts_ohs/o-avanco-sobre-a-amazonia-exploracao-economica-e-doencas/

**Atenção:** a Fiocruz é uma instituição pública de pesquisa, mas não está na lista explícita de fontes do CLAUDE.md, e o texto é de divulgação. Avalie se aceita.

- "[...] a Estrada de Ferro Madeira-Mamoré, construída de 1907 a 1912. Vencida pela malária, o obra ceifou a vida de um operário a cada dormente assentado, conforme se propagou na época. Ao longo dos anos, a ferrovia foi sucateada até sua final desativação, em 1972."
- "Inaugurada em 1912, a ferrovia ligava Porto Velho a Guajará-Mirim [...] foram tantas as mortes por malária, beribéri e outras doenças tropicais durante sua construção, que a obra acabou não justificando o investimento, visto que a borracha brasileira já perdia mercado para os seringais da Ásia."
- "[...] as condições de abandono dos operários recrutados para a construção da Madeira-Mamoré, entre norte-americanos, bolivianos e cearenses, estes últimos expulsos pela seca [...]"

- Citação de Jaime Benchimol e André Felipe Cândido da Silva na mesma página: "No mesmo ano, a Madeira Mamoré Railway apresentou ao governo os custos finais da construção da ferrovia, em dinheiro e vidas. Dos 21.817 trabalhadores contratados, estima-se o total de mortos em 6.208 pessoas."
- Autoria da página: "Por Cristiane d'Avila em Café História".

**Correção (2026-10-20):** na primeira versão, esta evidência dizia que o número de mortos não estava na página. Estava: ele aparece na citação acima, e o texto agora o informa, atribuindo a estimativa à própria empresa. Dado em disputa: buscas mostram outras estimativas ("mais de seis mil" em artigo da HCSM; 1.593 em outro). A pergunta trata a frase "uma vida por dormente" como lenda a discutir.

## RS — O charque era feito por escravizados

Fonte: ROCHA, Marcelo Garcia da. *Arqueologia da escravidão e patrimônio cultural no Passo dos Negros (Pelotas, RS)*. Dissertação (Mestrado em Memória Social e Patrimônio Cultural), UFPel, Pelotas, 2014. PDF: https://wp.ufpel.edu.br/ppgmp/files/2016/11/Marcelo-Garcia.pdf

- Ata da Câmara citada na dissertação: "Sessão de 7 de agosto de 1832 [...] os do Estado vizinho, [não] apenas fazendo a guerra entre si, enviam emissários disfarçados para revoltarem a escravatura, sendo bem constante que o distrito desta Vila tem para mais de quatro mil escravos quase unidos segundo a posição das charqueadas [...]"
- "[...] o contingente de escravos que povoavam as charqueadas, estes que estavam para mais de 4 mil como assinala a Sessão Câmara Municipal de 7 de agosto de 1832."
- "Para os registros de 1809-1825, num um total de 6.984 cativos que deram entrada nas bandas do Rio Grande do Sul, a margem varia entre 95% (6.635) de africanos e 5% (349) de crioulos." (citando PESSI, 2008)

A primeira frase ("dependia do trabalho escravizado") resume a dissertação, que trata dos "trabalhadores escravizados nas charqueadas".

## SE — Cabeças em exposição

Fonte: FERREIRA JÚNIOR, José. "Cabeças cortadas: troféus exibidos e punição no embate entre volantes e cangaceiros, sertões nordestinos brasileiros (1922–1938)". *Ponta de Lança: Revista Eletrônica de História, Memória & Cultura* (UFS), São Cristóvão, v. 17, n. 33, jul.-dez. 2023. https://doi.org/10.61895/pl.v17i33.19549 — PDF: https://periodicos.ufs.br/pontadelanca/article/download/19549/14977

- "[...] em território sergipano, no município de Poço Redondo, sertão do estado, na grota da fazenda Angico, ao amanhecer do dia 28 de julho de 1938, uma quinta-feira, Lampião e seus liderados foram cercados e surpreendidos por soldados de volante alagoana [...]"
- "Segundo a narrativa oficial [...] onze cangaceiros, nove homens e duas mulheres, foram mortos e decapitados, entre eles Lampião e sua companheira, Maria Gomes, posteriormente alcunhada de Bonita. As cabeças foram transportadas para Piranhas, cidade alagoana [...] sendo expostas ao público nos degraus de acesso à prefeitura e, posteriormente [...] exibidas nas cidades alagoanas, em percurso até a capital, Maceió."
- "As de Lampião e Maria Gomes foram enviadas para a Salvador [...] onde ficaram expostas no Museu Antropológico Estácio de Lima [...] Somente vieram a ser sepultadas em seis de fevereiro de 1969 [...] após familiares conquistarem o direito na Justiça."
- Para a pergunta: "Além da tática antiga de impor medo através de ações violentas praticadas pelo Estado [...]"

Dado em disputa: buscas mostram um trabalho da UFBA que dá 1971 para o sepultamento. O texto usa 1969, ano desta fonte.

## TO — Guias à força

Fonte: NASCIMENTO, Durbens Martins. *A Guerrilha do Araguaia: "paulistas" e militares na Amazônia*. Dissertação (Mestrado em Planejamento do Desenvolvimento), NAEA/UFPA, defendida em 05/01/2000. PDF: https://repositorio.ufpa.br/jspui/bitstream/2011/2458/1/Dissertacao_GuerrilhaAraguaiaPaulistas.pdf

- Período: "[...] até o começo dos combates em abril de 1972, a segunda etapa, se estende desta data a março de 1975. É a etapa da guerra de guerrilhas e das Campanhas de Cerco e Aniquilamento."
- "A investida das forças repressivas concentrou-se nas cidades de Marabá, no Pará e Xambioá (próxima a Serra das Andorinhas), em Goiás e Imperatriz no Maranhão."
- "[...] escavações no Sul e Sudeste do estado do Pará e em Xambioá, no Tocantins. Elas dão suporte às investigações científicas sobre as circunstâncias em que foram mortos."
- "O morador que, de uma forma ou de outra, tivesse estabelecido algum tipo de relação com os paulistas, recebia o tratamento de simpatizante da Guerrilha [...] Bate-paus conhecidos foram 'contratados' como guias, na promessa de, ao final da operação militar, receberem o pagamento em terras que seriam doadas pelo INCRA. Vários guias, entretanto, foram obrigados, inclusive após sessões de tortura, a trabalhar para o Exército na mata."

Notas: a fonte chama os guias de "bate-paus" e "mateiros" (nota 68: "Homens contratados pelo Exército como informantes. Eram utilizados como guias, também conhecidos como 'mateiros'"). O texto não traz o número de mortos e desaparecidos: buscas mostram contagens diferentes (62 na sentença da Corte Interamericana, cerca de 70 segundo dados atribuídos à CNV), que não foram conferidas em página aberta.

## AC — Quantos soldados da borracha sumiram?

Fonte: MARTINELLO, Pedro. *A batalha da borracha na Segunda Guerra Mundial*. Rio Branco: Edufac, 2024 (ISBN 978-65-88975-82-4). PDF: http://www2.ufac.br/editora/livros/Abatalha.pdf

**Dado em disputa:** o texto mostra os três números e quem os deu.

- "O próprio contingente de cinquenta e cinco mil nordestinos que foi recrutado às pressas, para extração do precioso látex, levou o nome de exército da borracha, e os novos seringueiros permaneceram, até hoje, com a alcunha de soldados da borracha."
- "[...] uma violenta denúncia de uma caravana de estudantes cearenses, que, visitando a Amazônia para comprovar in loco a situação de seus coestaduanos, constataram o desaparecimento de 23 mil nordestinos, tragados pela batalha da borracha. Tal denúncia, que julgamos ter sido até um tanto exagerada quanto aos números, repercutiu como um rastilho de pólvora na imprensa de todo o país [...]"
- Editorial do *Jornal do Brasil* citado no livro, "A tragédia dos soldados da borracha": "A ditadura cavilosa e desumana arrancou dos labores rurais, em plena guerra, 50.000 nordestinos e fê-los marchar para a fome e para a morte [...]"
- "A resposta dos representantes da Amazônia, além de minimizar a tragédia e o número de mortes [...]"

O período 1942–1945 é o da Segunda Guerra, contexto do livro. Atenção: o livro trata da Amazônia como um todo, não só do Acre.

## AC — A doença que seguiu a borracha

Fonte: o mesmo capítulo usado na entrada do MT ("Comportamento epidemiológico da hanseníase no Brasil", *Saúde Brasil 2008*, Ministério da Saúde). PDF: https://api.arca.fiocruz.br/api/core/bitstreams/f6b7f0c7-96f5-4a46-921e-5a4e7c555755/content

- "Agrícola (1975) avaliou a situação epidemiológica da hanseníase no País, em 1973, apontando que o estado do Acre, com economia baseada na borracha, tinha a pior situação epidemiológica. Ele também aponta que a região Nordeste tinha então o menor coeficiente de prevalência. Atualmente, os estados pertencentes à Amazônia brasileira apresentam a pior situação epidemiológica da hanseníase, com os maiores coeficientes de detecção. A região Nordeste foi substituída pela região Sul como aquela com menos hanseníase."

"Atualmente" no trecho se refere à época do estudo (série 1980-2009), por isso o texto diz "décadas depois". Ano de publicação como TODO: veja a nota da entrada do MT.

## AM — Quase meio milhão de indígenas

Fonte: IBGE, *Censo Demográfico 2022 — Identificação étnico-racial da população, por sexo e idade: resultados do universo* (2023). PDF: https://biblioteca.ibge.gov.br/visualizacao/periodicos/3105/cd_2022_etnico_racial.pdf

- Tabela 2, linha do Amazonas: "Amazonas 3 941 613 725 007 193 667 5 963 2 711 618 490 935". A última coluna é "Indígena".
- Tabela 3 (Variação 2010-2022), coluna "Indígena": "Brasil [...] 89,0%" e "Amazonas [...] 167,5%".
- Nota das tabelas: "O total de pessoas indígenas compreende as pessoas declaradas por meio do quesito de cor ou raça e aquelas declaradas por meio do quesito 'se considera indígena'."
- "[...] a manutenção da pergunta de cobertura 'se considera indígena', com aplicação ampliada [...]"

A pergunta não afirma a causa do crescimento: a publicação não a atribui a um fator.

## AM — Floresta derrubada, malária em alta

Fonte: D'AVILA, Cristiane. "O avanço sobre a Amazônia: exploração econômica e doenças". Observatório História e Saúde (Casa de Oswaldo Cruz/Fiocruz), 03/04/2023. https://ohs.coc.fiocruz.br/posts_ohs/o-avanco-sobre-a-amazonia-exploracao-economica-e-doencas/

- "No estudo, intitulado 'Impacto do desmatamento sobre a incidência de doenças na Amazônia', foram relacionados dados do desmatamento e estatísticas de doenças em 773 municípios da Amazônia Legal, entre 2004 e 2012. Constatou-se que para cada 1% de floresta derrubada por ano há um acréscimo de 23% nos casos de malária. A incidência de leishmaniose também cresceu com o avanço do desmatamento, com um aumento entre 8% e 9% de casos."
- Autoria do estudo: "[...] afirmam pesquisadores do Instituto de Pesquisa Econômica Aplicada (Ipea)."

Atenção: o dado é da Amazônia Legal como um todo, não só do Amazonas. O ideal seria trocar a fonte pelo estudo original do Ipea, que não foi aberto.

## AP — Escravizados no governo de Counani

Fonte: o mesmo capítulo de Adalberto Paz usado na primeira entrada do AP (UNIFAP, 2018). PDF: https://www2.unifap.br/editora/files/2018/05/Livro-Trabalhadores-Migra%C3%A7%C3%B5es-e-Natureza-no-Brasil-Equatorial.pdf

- "[...] no dia 3 de novembro de 1883, o presidente do Pará remeteu ao ministro [...] um recorte do jornal Liberal do Pará daquele mesmo dia, no qual constava a notícia de que os franceses haviam chegado ao Cunani e feito 'os negros fugidos e desertores, que ali se acham, jurarem bandeira, declarando-se cidadãos franceses'."
- "Segundo o periódico, o quilombo de Counani – 'conhecido desde largos anos' – habitado por escravos fugidos de Macapá, Vigia, Cintra e Belém, tinha sido elevado a categoria de 'colônia, com autoridades constituídas em nome da república francesa'." (Diário de Belém, 20/01/1884)
- Lista publicada: "Trajano (escravo de Raymundo Alves), capitão; [...] Pedro de Souza (escravo de Cassiano Alvares), maire da vila; [...] Quintino Maciel (escravo da orphã d. Maria da Glória, de S. Caeatano), juiz de paz [...]"
- "[...] o Cunani possuía um corpo burocrático composto em sua maioria por escravos que haviam encontrado refúgio seguro no Amapá [...]"
- "[...] relatórios sobre o Contestado franco-brasileiro [...]"

O texto usa "teria virado" porque a informação vem da imprensa da época, como o próprio autor ressalva ("Nomeados ou não pelo governo francês [...]").

## PA — Rebeldes em nome do imperador

Fonte: o mesmo artigo de Magda Ricci usado na primeira entrada do PA (*Tempo*, 2007). URL: https://www.scielo.br/j/tem/a/ZX5z5skg9g7YyC47qtn533N/?lang=pt

- "[...] Malcher visualizava o clímax da luta cabana nos episódios do 7 de janeiro de 1835. Nesta data, em nome de Pedro II, Malcher foi aclamado pelo povo para governar o Grão-Pará durante a menoridade do Imperador."
- "Durante a primeira tomada de Belém, em 7 de janeiro [...]"
- "A bandeira de luta dos levantados de janeiro resumia-se na morte aos portugueses e aos maçons."
- "Eles se autodenominavam 'patriotas', mas ser patriota não era necessariamente sinônimo de ser brasileiro."

O texto diz "o menino Pedro II" porque a fonte fala em "Imperador menino, Pedro II" ("[...] mantinham vínculos com o regime constitucional carioca, especialmente com o Imperador menino, Pedro II").

## RO — Um estado de migrantes

Fonte: o mesmo capítulo de *Saúde Brasil 2008* usado na entrada do MT. PDF: https://api.arca.fiocruz.br/api/core/bitstreams/f6b7f0c7-96f5-4a46-921e-5a4e7c555755/content

- "As áreas dos clusters na região Amazônica coincidem com áreas de projetos de assentamento e de polos de desenvolvimento agropecuário. No censo de 1980, não haviam nascido no estado de residência 35,5% da população no Mato Grosso e 40,7% em Rondônia. A densidade demográfica passou de 0,15 habitante por km2, em 1950, para 5,8 habitantes/km2 em 2000, em Rondônia [...] Há, ainda, a circulação de garimpeiros, à procura de ouro e cassiterita, nas áreas desses clusters."

"Quase 40 vezes" é conta minha: 5,8 ÷ 0,15 ≈ 38,7.

## RR — O estado que mais cresceu

Fonte: IBGE, *Censo Demográfico 2022 — Identificação étnico-racial da população* (2023). PDF: https://biblioteca.ibge.gov.br/visualizacao/periodicos/3105/cd_2022_etnico_racial.pdf

- Tabela 3 (Variação 2010-2022), colunas Total, Branca, Preta, Amarela, Parda, Indígena: "Brasil 6,5% -3,1% 42,3% -59,2% 11,9% 89,0%" e "Roraima 41,3% 39,3% 86,6% -81,8% 32,1% 74,7%".
- "Maior variação entre todas as UFs": comparei a coluna Total de todas as UFs da Tabela 3. A seguinte é Santa Catarina, com 21,8%.
- "[...] Roraima, com 15,4% de sua população residente indígena [...]"

A publicação não explica a causa do crescimento, por isso a entrada não afirma nenhuma. "Seis vezes" na pergunta é conta minha: 41,3 ÷ 6,5 ≈ 6,4.
