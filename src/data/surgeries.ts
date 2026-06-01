import type { IExam } from './exams';

import FacImage from '../../public/cirurgias/cirurgia-facectomia-com-lio-dobravel.webp';
import PteImage from '../../public/cirurgias/pterigio-com-cola-biologica.webp';
import PRKImage from '../../public/cirurgias/cirurgia-refrativa-prk.webp';
import LASIKImage from '../../public/cirurgias/cirurgia-refrativa-lasik.webp';
import IAFRImage from '../../public/cirurgias/implante-de-anel-de-ferrara.webp';
import IIEImage from '../../public/cirurgias/Injecao-intravitrea.jpg';
import TCPImage from '../../public/cirurgias/cirurgia-transplante-de-cornea-.jpg';
import VitImage from '../../public/cirurgias/vitrectomia.jpg';

export interface ISurgery extends IExam {}

export const surgeries: ISurgery[] = [
  {
    label: 'Facectomia com Lio Dobrável',
    title:
      'Cirurgia de Catarata (Facectomia com LIO Dobrável): O Guia Definitivo para Voltar a Ver o Mundo com Nitidez',
    description:
      'Entenda tudo sobre a Facectomia com LIO Dobrável, a cirurgia de catarata mais moderna e segura. Explicamos o que é, como a técnica de facoemulsificação funciona, os tipos de lentes intraoculares (LIO) e como esse procedimento pode corrigir miopia, astigmatismo e presbiopia, além da catarata.',
    slug: 'cirurgia-facectomia-com-lio-dobravel-guia-catarata',
    imageUrl: FacImage,
    content: `
                <article>
                <header>
                    <h1>Cirurgia de Catarata (Facectomia com LIO Dobrável): O Guia Definitivo para Voltar a Ver o Mundo com Nitidez</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Facectomia com implante de Lente Intraocular (LIO) Dobrável</strong> é o procedimento cirúrgico mais avançado e eficaz para o tratamento da catarata. Considerada o padrão-ouro na oftalmologia moderna, esta técnica não só remove o cristalino opacificado (a catarata), que causa a visão embaçada, mas também o substitui por uma lente artificial de alta tecnologia, restaurando a clareza visual e, em muitos casos, reduzindo a dependência de óculos.</p>
                    <p>Nesta página, vamos desmistificar a cirurgia de catarata, explicando cada passo do processo, desde a sua indicação até a recuperação, para que você tome a melhor decisão para a saúde dos seus olhos.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que é a Facectomia com LIO Dobrável?</h2>
                    <p>A facectomia é o nome técnico dado à cirurgia que remove o cristalino, a lente natural do olho. Quando o cristalino se torna opaco, chamamos de catarata. A técnica mais utilizada hoje é a <strong>facoemulsificação</strong>, um método minimamente invasivo.</p>
                    <p>Neste procedimento, o cirurgião faz uma microincisão, geralmente menor que 2.5mm, na córnea. Através dela, uma pequena sonda de ultrassom é inserida para fragmentar e aspirar suavemente o cristalino opaco. A grande vantagem é que, após a remoção, uma <strong>Lente Intraocular (LIO) Dobrável</strong> é inserida através da mesma microincisão. Dentro do olho, a lente se desdobra e se posiciona no lugar do antigo cristalino.</p>
                    <p>Por ser uma incisão tão pequena e autosselante, na maioria dos casos <strong>não há necessidade de pontos</strong>, o que proporciona uma cicatrização mais rápida e segura.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para Quem a Cirurgia é Indicada?</h2>
                    <p>A principal indicação para a facectomia é a <strong>catarata</strong>, uma condição comum com o envelhecimento, que leva à perda progressiva da visão. Os sintomas mais comuns são:</p>
                    <ul>
                        <li>Visão embaçada ou nublada, como se olhasse através de uma vidraça suja.</li>
                        <li>Cores parecem desbotadas ou amareladas.</li>
                        <li>Aumento da sensibilidade à luz (fotofobia) e halos ao redor das luzes.</li>
                        <li>Mudanças frequentes no grau dos óculos.</li>
                        <li>Visão dupla ou imagens fantasmas em um dos olhos.</li>
                    </ul>
                    <p>Além da catarata, a cirurgia também pode ser uma opção para corrigir erros refrativos (graus) elevados ou para pacientes com presbiopia (vista cansada) que desejam maior independência dos óculos, através das LIOs Premium.</p>
                </section>
                
                <section id="tipos-de-lio">
                    <h2>As Lentes Intraoculares (LIOs): Uma Nova Visão Sob Medida</h2>
                    <p>A escolha da LIO é um dos passos mais importantes e será feita em conjunto com seu oftalmologista, baseada nas suas necessidades visuais e estilo de vida. As LIOs dobráveis modernas oferecem diversas tecnologias:</p>
                    <ul>
                        <li><strong>LIOs Monofocais:</strong> Corrigem a visão para uma única distância, geralmente para longe. O paciente terá uma excelente visão para dirigir ou ver TV, mas provavelmente precisará de óculos para ler ou usar o computador.</li>
                        <li><strong>LIOs Tóricas:</strong> Projetadas especificamente para pacientes com <strong>astigmatismo</strong>. Elas corrigem o astigmatismo corneano no momento da cirurgia, proporcionando uma visão de longe muito mais nítida sem óculos.</li>
                        <li><strong>LIOs Multifocais e Trifocais:</strong> Consideradas LIOs Premium, possuem múltiplos pontos de foco, permitindo uma boa visão para <strong>longe, perto e distâncias intermediárias</strong> (como o painel do carro ou o computador). O objetivo é reduzir significativamente ou eliminar a necessidade de óculos na maioria das atividades diárias.</li>
                        <li><strong>LIOs de Foco Estendido (EDOF):</strong> Oferecem uma amplitude de foco contínua, melhorando a visão de longe e intermediária, com menos efeitos de halos luminosos que algumas lentes multifocais podem apresentar.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizada a Cirurgia de Facectomia?</h2>
                    <p>O procedimento é rápido, seguro e realizado em ambiente cirúrgico ambulatorial, o que significa que o paciente vai para casa no mesmo dia.</p>
                    <ol>
                        <li><strong>Preparação:</strong> O olho é preparado com colírios anestésicos e para dilatação da pupila. Uma sedação leve pode ser administrada para garantir o seu conforto e tranquilidade.</li>
                        <li><strong>Procedimento:</strong> A cirurgia dura, em média, de 15 a 30 minutos. Utilizando um microscópio cirúrgico, o médico realiza a facoemulsificação e o implante da LIO dobrável, como descrito anteriormente.</li>
                        <li><strong>Pós-operatório imediato:</strong> Um curativo protetor pode ser colocado sobre o olho. Após um breve período de observação, o paciente é liberado para ir para casa, sempre com um acompanhante.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Facectomia com LIO Dobrável</h2>
                    <ul>
                        <li><strong>Recuperação Rápida:</strong> A pequena incisão permite que a maioria dos pacientes retome suas atividades normais em poucos dias.</li>
                        <li><strong>Alta Segurança:</strong> Técnica minimamente invasiva com baixo índice de complicações.</li>
                        <li><strong>Sem Pontos:</strong> A incisão é autosselante, promovendo conforto e melhor cicatrização.</li>
                        <li><strong>Correção da Visão:</strong> Além de tratar a catarata, pode corrigir miopia, hipermetropia, astigmatismo e presbiopia.</li>
                        <li><strong>Melhora na Qualidade de Vida:</strong> Retorno da nitidez, das cores e da confiança para realizar atividades diárias.</li>
                    </ul>
                </section>
                
                <section id="cuidados-pos-operatorios">
                    <h2>Cuidados Após a Cirurgia</h2>
                    <p>Para garantir o sucesso do procedimento, é fundamental seguir as orientações médicas, que geralmente incluem:</p>
                    <ul>
                        <li>Usar corretamente os colírios antibióticos e anti-inflamatórios prescritos.</li>
                        <li>Não coçar ou esfregar o olho operado.</li>
                        <li>Usar o protetor ocular, especialmente para dormir.</li>
                        <li>Evitar esforços físicos, como levantar peso, e ambientes com poeira ou fumaça na primeira semana.</li>
                        <li>Comparecer a todas as consultas de acompanhamento.</li>
                    </ul>
                    <p><strong>Recupere o prazer de ver o mundo com clareza. Se a catarata está afetando sua vida, não espere mais.</strong></p>
                    <a href="#agendamento" class="cta-button">Agende sua Avaliação Oftalmológica</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia de catarata dói?</summary>
                        <p>Não. A cirurgia é realizada com anestesia local (colírios) e uma leve sedação, tornando o procedimento totalmente indolor. Um leve desconforto pode ser sentido nas primeiras horas após a cirurgia, mas é facilmente controlado com medicação.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>A catarata pode voltar depois da cirurgia?</summary>
                        <p>Não, a catarata em si não volta, pois o cristalino opaco foi removido. O que pode ocorrer meses ou anos depois é a opacificação da cápsula posterior, uma fina membrana onde a LIO se apoia. Isso é resolvido de forma rápida e indolor com um procedimento a laser chamado Capsulotomia com YAG Laser.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quanto tempo leva para a visão melhorar?</summary>
                        <p>A melhora da visão costuma ser notada já no dia seguinte à cirurgia e continua a progredir gradualmente. A estabilização completa da visão pode levar algumas semanas.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O plano de saúde cobre a cirurgia de facectomia?</summary>
                        <p>Sim, a cirurgia de catarata (facectomia) com implante de LIO monofocal é coberta pela maioria dos planos de saúde, por ser um procedimento para restaurar a saúde visual. Lentes Premium (multifocais, tóricas, etc.) podem ter custos adicionais, dependendo da cobertura do seu plano.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Preciso operar os dois olhos ao mesmo tempo?</summary>
                        <p>Não. A prática segura é operar um olho de cada vez. Geralmente, há um intervalo de alguns dias ou semanas entre a cirurgia do primeiro e do segundo olho, conforme a indicação do seu médico.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Pterigioplastia com Cola Biológica',
    title:
      'Pterigioplastia: Remoção do Pterígio com Cola Biológica para uma Recuperação Superior',
    description:
      'Descubra a Pterigioplastia com uso de cola biológica, a técnica moderna para tratar o pterígio. Saiba como este método avançado reduz o desconforto, acelera a cicatrização e diminui as chances de a lesão retornar. Um guia completo para pacientes.',
    slug: 'pterigioplastia-cirurgia-pterigio-cola-biologica',
    imageUrl: PteImage,
    content: `
                <article>
                <header>
                    <h1>Pterigioplastia: Remoção do Pterígio com Cola Biológica para uma Recuperação Superior</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Pterigioplastia</strong> é a cirurgia para remoção do <strong>pterígio</strong>, uma lesão benigna que consiste no crescimento de um tecido avermelhado sobre a córnea, a parte transparente do olho. Popularmente conhecida como "carne no olho", o pterígio pode causar desconforto, irritação, vermelhidão e, em casos avançados, afetar a visão ao distorcer a córnea ou cobrir o eixo visual.</p>
                    <p>A técnica moderna de <strong>Pterigioplastia com transplante conjuntival e uso de cola biológica</strong> representa um grande avanço, oferecendo um pós-operatório mais confortável e com menores taxas de recidiva (retorno do pterígio).</p>
                </section>

                <section id="como-funciona">
                    <h2>Como Funciona a Cirurgia com Cola Biológica?</h2>
                    <p>O objetivo da cirurgia não é apenas remover o pterígio, mas também prevenir que ele cresça novamente. A técnica mais eficaz para isso é a remoção da lesão seguida de um <strong>transplante autólogo de conjuntiva</strong>.</p>
                    <p>Funciona assim: após a remoção cuidadosa do pterígio, uma pequena e fina porção de conjuntiva saudável (a membrana transparente que recobre a parte branca do olho) é retirada de uma área coberta pela pálpebra superior. Esse enxerto é então posicionado sobre a área onde o pterígio foi removido.</p>
                    <p>A grande inovação está na fixação deste enxerto. Em vez de utilizar suturas (pontos), o cirurgião usa uma <strong>cola biológica de fibrina</strong>. Este adesivo cirúrgico cola o enxerto no lugar de forma segura, eliminando a necessidade de pontos, que são frequentemente a principal causa de irritação e desconforto no pós-operatório.</p>
                </section>

                <section id="indicacoes">
                    <h2>Quando a Cirurgia de Pterígio é Indicada?</h2>
                    <p>A cirurgia é recomendada quando o pterígio causa sintomas significativos ou representa um risco para a visão. As principais indicações são:</p>
                    <ul>
                        <li><strong>Ameaça à Visão:</strong> Quando o pterígio cresce em direção ao centro da córnea (pupila), podendo cobri-la.</li>
                        <li><strong>Astigmatismo:</strong> O crescimento do tecido pode "puxar" e deformar a córnea, induzindo ou piorando o astigmatismo.</li>
                        <li><strong>Irritação Crônica:</strong> Sintomas persistentes como vermelhidão, ardência, sensação de areia no olho e lacrimejamento que não melhoram com colírios.</li>
                        <li><strong>Uso de Lentes de Contato:</strong> Dificuldade ou desconforto ao usar lentes de contato.</li>
                        <li><strong>Razões Estéticas:</strong> Quando a aparência do pterígio causa desconforto ao paciente.</li>
                    </ul>
                </section>
                
                <section id="como-e-feito">
                    <h2>Como é Realizada a Pterigioplastia?</h2>
                    <p>O procedimento é ambulatorial, rápido e seguro.</p>
                    <ol>
                        <li><strong>Anestesia:</strong> A cirurgia é realizada sob anestesia local, geralmente com a aplicação de colírios anestésicos, garantindo que o paciente não sinta dor. Uma leve sedação pode ser utilizada para maior conforto.</li>
                        <li><strong>Procedimento Cirúrgico:</strong> O cirurgião remove o tecido do pterígio. Em seguida, prepara o enxerto de conjuntiva saudável e o posiciona sobre a área exposta, fixando-o com a cola biológica.</li>
                        <li><strong>Finalização:</strong> A cirurgia dura cerca de 30 a 45 minutos. Um curativo oclusivo é colocado sobre o olho para proteção, e o paciente é liberado para casa logo após o procedimento, com um acompanhante.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>Vantagens da Técnica com Cola Biológica</h2>
                    <ul>
                        <li><strong>Menos Dor e Inchaço:</strong> A ausência de pontos reduz significativamente a inflamação e o desconforto pós-operatório.</li>
                        <li><strong>Recuperação Mais Rápida:</strong> O tempo cirúrgico é menor e a cicatrização é mais acelerada.</li>
                        <li><strong>Menor Taxa de Recidiva:</strong> A técnica do transplante conjuntival é a que oferece as menores chances de o pterígio voltar.</li>
                        <li><strong>Mais Conforto:</strong> Sem a sensação de "arranhado" causada pelos pontos, o paciente se sente muito mais confortável.</li>
                    </ul>
                </section>
                
                <section id="cuidados-pos-operatorios">
                    <h2>O que Esperar Após a Cirurgia?</h2>
                    <p>O olho pode ficar vermelho e sensível por algumas semanas, o que é normal. Para uma boa recuperação, é essencial:</p>
                    <ul>
                        <li>Utilizar os colírios anti-inflamatórios e antibióticos conforme a prescrição médica.</li>
                        <li>Evitar coçar o olho operado.</li>
                        <li>Usar óculos de sol para proteger os olhos da luz, vento e poeira.</li>
                        <li>Afastar-se de atividades físicas intensas, praias e piscinas por algumas semanas.</li>
                        <li>Comparecer às consultas de retorno para acompanhamento da cicatrização.</li>
                    </ul>
                    <p><strong>Não deixe que o pterígio comprometa seu conforto e sua visão. Descubra os benefícios de uma cirurgia moderna e segura.</strong></p>
                    <a href="#agendamento" class="cta-button">Agende sua Avaliação Oftalmológica</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia de pterígio dói?</summary>
                        <p>Não. O procedimento é feito sob anestesia local e sedação, sendo indolor. O desconforto no pós-operatório é muito menor com a técnica da cola biológica em comparação com os pontos.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O pterígio pode voltar mesmo após a cirurgia?</summary>
                        <p>A recidiva é uma possibilidade, mas a técnica de transplante de conjuntiva (autólogo) tem as taxas mais baixas, em torno de 5%. Seguir os cuidados pós-operatórios e proteger os olhos do sol é crucial para minimizar esse risco.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quanto tempo de repouso é necessário?</summary>
                        <p>A maioria dos pacientes pode retornar às atividades de escritório e estudos em 2 a 7 dias. Atividades que envolvam esforço físico, poeira ou risco de contaminação devem ser evitadas por cerca de 3 a 4 semanas.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>A cola biológica é segura?</summary>
                        <p>Sim, a cola de fibrina é um material biocompatível e seguro, amplamente utilizado em diversas áreas da medicina para selar tecidos e evitar sangramentos. Ela é gradualmente absorvida pelo organismo.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Cirurgia Refrativa PRK',
    title: 'Cirurgia Refrativa PRK: O Guia Completo para se Livrar dos Óculos',
    description:
      'Conheça a cirurgia refrativa PRK (Ceratectomia Fotorrefrativa), uma técnica a laser segura e eficaz para corrigir miopia, hipermetropia e astigmatismo. Entenda como funciona, para quem é indicada e como é a recuperação.',
    slug: 'cirurgia-refrativa-prk-correcao-grau',
    imageUrl: PRKImage,
    content: `
                <article>
                <header>
                    <h1>Cirurgia Refrativa PRK: O Guia Completo para se Livrar dos Óculos</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Ceratectomia Fotorrefrativa</strong>, mais conhecida como <strong>PRK</strong>, é uma das técnicas mais consagradas e seguras de cirurgia refrativa a laser. Seu objetivo é remodelar a superfície da córnea para corrigir erros de refração, como <strong>miopia, hipermetropia e astigmatismo</strong>, proporcionando uma visão nítida sem a necessidade de óculos ou lentes de contato.</p>
                    <p>O PRK é uma excelente alternativa para muitos pacientes, especialmente aqueles que, por certas características da córnea, não são candidatos ideais para a técnica LASIK.</p>
                </section>

                <section id="como-funciona">
                    <h2>Como o PRK Corrige a Visão?</h2>
                    <p>A cirurgia PRK atua diretamente na superfície da córnea. O procedimento é baseado em dois passos principais:</p>
                    <ol>
                        <li><strong>Remoção do Epitélio:</strong> O cirurgião remove delicadamente a camada mais externa e fina de células da córnea, chamada de epitélio. Esta camada tem a capacidade de se regenerar completamente em poucos dias.</li>
                        <li><strong>Aplicação do Excimer Laser:</strong> Com a superfície da córnea exposta, o <strong>Excimer Laser</strong>, um feixe de luz ultravioleta frio e controlado por computador, é aplicado. Ele vaporiza microscopicamente o tecido corneano, remodelando sua curvatura com extrema precisão para corrigir o grau do paciente.</li>
                    </ol>
                    <p>Ao final, uma lente de contato terapêutica (sem grau) é colocada sobre o olho para proteger a córnea e auxiliar na cicatrização do epitélio, sendo removida pelo médico após 5 a 7 dias.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para Quem o PRK é Indicado?</h2>
                    <p>O PRK é uma opção fantástica para muitos pacientes que desejam a independência visual. É especialmente recomendado para:</p>
                    <ul>
                        <li>Pessoas com <strong>córneas mais finas</strong>, onde a criação do "flap" (lamela) da técnica LASIK não é segura.</li>
                        <li>Pacientes com <strong>membrana de Bowman irregular</strong> ou outras alterações na superfície da córnea.</li>
                        <li>Profissionais com atividades de alto impacto ou risco de trauma ocular, como <strong>atletas de luta e policiais</strong>, pois não há o risco de deslocamento do flap.</li>
                        <li>Pacientes com graus de miopia moderados, astigmatismo e hipermetropia baixa.</li>
                    </ul>
                    <p>A indicação definitiva depende de uma avaliação oftalmológica completa, incluindo exames como a topografia e a paquimetria da córnea.</p>
                </section>
                
                <section id="como-e-feito">
                    <h2>Como é a Experiência da Cirurgia PRK?</h2>
                    <p>O procedimento é rápido, realizado com o paciente deitado sob o equipamento de laser.</p>
                    <ol>
                        <li><strong>Preparação:</strong> O paciente recebe colírios anestésicos para que não sinta nenhuma dor durante a cirurgia. Um pequeno aparelho é usado para manter as pálpebras abertas.</li>
                        <li><strong>Procedimento:</strong> O cirurgião remove o epitélio e pede ao paciente que fixe o olhar em uma luz-guia. O laser é aplicado por alguns segundos, corrigindo o grau. O processo todo leva cerca de 5 a 10 minutos por olho.</li>
                        <li><strong>Pós-operatório imediato:</strong> A lente de contato terapêutica é colocada, e o paciente pode ir para casa. É essencial ter um acompanhante.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens do PRK</h2>
                    <ul>
                        <li><strong>Alta Segurança:</strong> É uma técnica com um longo histórico de segurança e excelentes resultados.</li>
                        <li><strong>Ausência de Flap:</strong> Elimina os riscos associados à criação e cicatrização do flap corneano.</li>
                        <li><strong>Preservação da Estrutura Corneana:</strong> Ideal para córneas mais finas, pois mantém maior integridade estrutural.</li>
                        <li><strong>Resultados Previsíveis:</strong> Oferece alta previsibilidade na correção do grau.</li>
                    </ul>
                </section>
                
                <section id="recuperacao">
                    <h2>Recuperação e Pós-Operatório do PRK</h2>
                    <p>A recuperação do PRK é um pouco mais lenta que a do LASIK, pois o epitélio precisa de tempo para se regenerar. É comum sentir algum desconforto, sensibilidade à luz, lacrimejamento e sensação de areia nos olhos nos primeiros 3 a 4 dias.</p>
                    <ul>
                        <li>A visão fica embaçada nos primeiros dias, melhorando progressivamente.</li>
                        <li>A nitidez visual final pode levar de algumas semanas a poucos meses para estabilizar completamente.</li>
                        <li>É crucial usar os colírios prescritos e óculos de sol com proteção UV para garantir uma cicatrização perfeita.</li>
                    </ul>
                    <p><strong>Imagine uma vida com mais liberdade, sem a dependência de óculos e lentes. O PRK pode ser o seu caminho.</strong></p>
                    <a href="#agendamento" class="cta-button">Agende sua Avaliação para Cirurgia Refrativa</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia PRK dói?</summary>
                        <p>A cirurgia em si é indolor devido aos colírios anestésicos. No pós-operatório, é comum sentir desconforto nos primeiros dias, que é bem controlado com analgésicos e colírios prescritos pelo seu médico.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Qual a diferença entre PRK e LASIK?</summary>
                        <p>A principal diferença está na forma como a córnea é preparada. No PRK, a camada superficial (epitélio) é removida. No LASIK, cria-se uma fina lamela (flap) que é levantada para a aplicação do laser e depois reposicionada. Isso resulta em uma recuperação mais rápida para o LASIK, mas o PRK é mais seguro para certos tipos de córnea.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quando posso voltar a trabalhar após o PRK?</summary>
                        <p>Devido ao desconforto inicial e à visão embaçada, recomenda-se um repouso de 3 a 5 dias. Após a remoção da lente de contato terapêutica, a maioria dos pacientes já se sente apta para retornar ao trabalho e às atividades rotineiras.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O grau pode voltar depois da cirurgia?</summary>
                        <p>A cirurgia refrativa oferece resultados estáveis a longo prazo. Pequenas alterações no grau podem ocorrer ao longo dos anos devido ao processo natural de envelhecimento do olho, mas é raro que o grau original retorne. É fundamental que o grau esteja estável por pelo menos um ano antes da cirurgia.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Cirurgia Refrativa LASIK',
    title: 'Cirurgia Refrativa LASIK: Visão Nítida com Recuperação Rápida',
    description:
      'Saiba tudo sobre o LASIK, a popular cirurgia a laser que corrige miopia, hipermetropia e astigmatismo. Explicamos a técnica do flap, suas vantagens, como é o procedimento e por que a recuperação é tão rápida. Liberte-se dos óculos!',
    slug: 'cirurgia-refrativa-lasik-recuperacao-rapida',
    imageUrl: LASIKImage,
    content: `
                <article>
                <header>
                    <h1>Cirurgia Refrativa LASIK: Visão Nítida com Recuperação Rápida</h1>
                </header>
                
                <section id="o-que-e">
                    <p>O <strong>LASIK</strong> (Laser-Assisted in Situ Keratomileusis) é uma das cirurgias refrativas mais realizadas no mundo, famosa por sua eficácia e, principalmente, pela <strong>rápida recuperação visual</strong>. O procedimento utiliza o Excimer Laser para remodelar a córnea e corrigir erros refrativos como <strong>miopia, hipermetropia e astigmatismo</strong>, oferecendo a milhões de pessoas a chance de viver sem a dependência de óculos ou lentes de contato.</p>
                    <p>Nesta página, vamos detalhar como o LASIK funciona, suas indicações e as vantagens que o tornam uma escolha tão popular para a correção da visão.</p>
                </section>

                <section id="como-funciona">
                    <h2>Como a Mágica do LASIK Acontece?</h2>
                    <p>O grande diferencial do LASIK está na forma como o laser alcança o interior da córnea para fazer a correção, minimizando o desconforto e acelerando a cicatrização.</p>
                    <ol>
                        <li><strong>Criação do Flap (Lamela):</strong> O cirurgião utiliza um aparelho de alta precisão chamado microcerátomo, ou um Laser de Femtossegundo (técnica conhecida como Femto-LASIK), para criar uma finíssima lamela na superfície da córnea, como se fosse uma "tampa". Esse flap é então delicadamente levantado.</li>
                        <li><strong>Aplicação do Excimer Laser:</strong> Com o flap levantado, o leito interno da córnea fica exposto. O <strong>Excimer Laser</strong>, guiado por computador, é aplicado por alguns segundos para remodelar o tecido com extrema precisão, corrigindo o erro refrativo do paciente.</li>
                        <li><strong>Reposicionamento do Flap:</strong> Após a aplicação do laser, o flap é cuidadosamente reposicionado. Ele adere naturalmente à córnea em poucos minutos, sem a necessidade de pontos, funcionando como um "curativo" natural.</li>
                    </ol>
                    <p>Como a camada superficial do olho (epitélio) permanece praticamente intacta, a recuperação visual e o conforto pós-operatório são notavelmente rápidos.</p>
                </section>

                <section id="indicacoes">
                    <h2>O LASIK é a Escolha Certa para Mim?</h2>
                    <p>O LASIK é uma excelente opção para um grande número de pacientes, mas a candidatura ideal depende de uma avaliação oftalmológica detalhada. Os requisitos geralmente incluem:</p>
                    <ul>
                        <li><strong>Estabilidade do Grau:</strong> Ter o grau de miopia, hipermetropia ou astigmatismo estável há pelo menos um ano.</li>
                        <li><strong>Espessura da Córnea:</strong> Possuir uma córnea com espessura suficiente para a criação segura do flap e a aplicação do laser.</li>
                        <li><strong>Saúde Ocular:</strong> Não apresentar outras doenças oculares significativas, como ceratocone, glaucoma avançado ou infecções.</li>
                        <li><strong>Boa Saúde Geral:</strong> Não ter doenças sistêmicas descontroladas que possam afetar a cicatrização.</li>
                    </ul>
                    <p>O LASIK é frequentemente preferido por pessoas que desejam um retorno rápido às suas atividades diárias, como profissionais e estudantes.</p>
                </section>
                
                <section id="como-e-feito">
                    <h2>A Experiência da Cirurgia LASIK</h2>
                    <p>O procedimento é ambulatorial, seguro e muito rápido, durando poucos minutos por olho.</p>
                    <ol>
                        <li><strong>Preparação:</strong> Gotas de colírio anestésico são aplicadas para garantir que não haja dor. Suas pálpebras serão mantidas abertas com um pequeno dispositivo.</li>
                        <li><strong>Procedimento:</strong> Você será posicionado sob o laser e orientado a focar em uma luz. O cirurgião cria e levanta o flap, o laser é aplicado por segundos e o flap é reposicionado. Você não sentirá dor, apenas uma leve pressão no olho.</li>
                        <li><strong>Pós-operatório:</strong> Após a cirurgia, você descansará por um curto período e depois será liberado para casa (com um acompanhante). A visão já costuma estar notavelmente melhor em poucas horas.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens do LASIK</h2>
                    <ul>
                        <li><strong>Recuperação Visual Rápida:</strong> A maioria dos pacientes já enxerga bem no dia seguinte à cirurgia.</li>
                        <li><strong>Mínimo Desconforto:</strong> Há pouco ou nenhum desconforto após o procedimento.</li>
                        <li><strong>Alta Eficácia e Previsibilidade:</strong> Técnica comprovada com altíssimos índices de sucesso na correção do grau.</li>
                        <li><strong>Rapidez:</strong> O procedimento em si leva apenas alguns minutos.</li>
                    </ul>
                </section>
                
                <section id="cuidados-pos-operatorios">
                    <h2>Cuidados Simples para um Resultado Perfeito</h2>
                    <p>A recuperação rápida não dispensa os cuidados essenciais para garantir a segurança e o sucesso do resultado.</p>
                    <ul>
                        <li>Usar os colírios antibióticos e lubrificantes conforme a prescrição.</li>
                        <li>Não esfregar ou coçar os olhos.</li>
                        <li>Usar um protetor ocular para dormir nos primeiros dias.</li>
                        <li>Evitar maquiagem, piscinas e praias nas primeiras semanas.</li>
                        <li>Comparecer às consultas de revisão agendadas pelo seu médico.</li>
                    </ul>
                    <p><strong>Dê o primeiro passo para uma vida com mais liberdade e nitidez. Veja o mundo com os seus próprios olhos.</strong></p>
                    <a href="#agendamento" class="cta-button">Agende sua Avaliação para Cirurgia Refrativa</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia LASIK dói?</summary>
                        <p>Não. A cirurgia é indolor graças à anestesia com colírios. O paciente pode sentir uma leve sensação de pressão durante a criação do flap, mas não há dor.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quando posso voltar a dirigir e trabalhar?</summary>
                        <p>A maioria dos pacientes já tem uma visão funcional para dirigir e voltar ao trabalho de escritório no dia seguinte à cirurgia, o que é uma das maiores vantagens do LASIK.</p>
                    </details>

                    <details class="faq-item">
                        <summary>O que é Femto-LASIK? É melhor?</summary>
                        <p>Femto-LASIK é uma variação da técnica onde o flap é criado com um Laser de Femtossegundo em vez de uma lâmina (microcerátomo). É considerado um método mais preciso e seguro para a criação do flap, permitindo flaps mais finos e uniformes. É a tecnologia mais avançada para o LASIK.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Posso fazer LASIK se tenho olho seco?</summary>
                        <p>A cirurgia pode temporariamente piorar os sintomas de olho seco. Casos leves a moderados podem ser tratados antes e depois da cirurgia. Casos severos de olho seco podem ser uma contraindicação, e seu médico avaliará a melhor opção para você.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Implante de Anel de Ferrara com Laser',
    title:
      'Anel de Ferrara com Laser de Femtossegundo: Tecnologia Avançada para Tratar o Ceratocone',
    description:
      'Entenda como o Implante de Anel de Ferrara (Intracorneano), auxiliado pelo Laser de Femtossegundo, pode tratar o ceratocone. Explicamos como essa tecnologia de ponta melhora a visão, regulariza a córnea e adia ou evita a necessidade de um transplante.',
    slug: 'anel-de-ferrara-laser-femtosegundo-ceratocone',
    imageUrl: IAFRImage,
    content: `
                <article>
                <header>
                    <h1>Anel de Ferrara com Laser de Femtossegundo: Tecnologia Avançada para Tratar o Ceratocone</h1>
                </header>
                
                <section id="o-que-e">
                    <p>O <strong>Implante de Anel Intracorneano</strong>, também conhecido como <strong>Anel de Ferrara</strong>, é um procedimento cirúrgico inovador e minimamente invasivo destinado ao tratamento do <strong>ceratocone</strong>. O ceratocone é uma doença que provoca o afinamento e o encurvamento progressivo da córnea, tornando-a com um formato de cone, o que causa distorção e embaçamento da visão.</p>
                    <p>A utilização do <strong>Laser de Femtossegundo</strong> para a criação dos túneis que receberão o anel tornou o procedimento ainda mais seguro, preciso e previsível, representando a vanguarda no tratamento desta condição.</p>
                </section>

                <section id="como-funciona">
                    <h2>Como o Anel de Ferrara e o Laser Atuam?</h2>
                    <p>O Anel de Ferrara consiste em um ou dois pequenos segmentos de acrílico (PMMA), um material biocompatível. O objetivo do anel não é "segurar" a córnea, mas sim exercer uma força de aplanação sobre ela, tornando sua superfície mais regular e corrigindo parte da deformação causada pelo ceratocone.</p>
                    <p>O processo, com a ajuda do laser, ocorre da seguinte forma:</p>
                    <ol>
                        <li><strong>Criação dos Túneis com Laser de Femtossegundo:</strong> Em vez de uma incisão manual, o <strong>Laser de Femtossegundo</strong> é utilizado para criar túneis circulares no interior da córnea (no estroma) com extrema precisão, na profundidade, diâmetro e comprimento exatos planejados pelo cirurgião. Este passo é rápido, indolor e sem cortes com lâminas.</li>
                        <li><strong>Implante do Anel:</strong> Através de uma microincisão, o cirurgião insere os segmentos do Anel de Ferrara dentro dos túneis recém-criados pelo laser.</li>
                    </ol>
                    <p>Ao ser implantado, o anel regulariza a curvatura da córnea, o que melhora a acuidade visual e a qualidade da visão, além de facilitar a adaptação de óculos ou lentes de contato.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para Quem o Implante de Anel é Indicado?</h2>
                    <p>O Anel de Ferrara é uma opção de tratamento para pacientes com ceratocone que não obtêm uma visão satisfatória com óculos e apresentam intolerância ao uso de lentes de contato rígidas. As principais indicações são:</p>
                    <ul>
                        <li>Pacientes com <strong>ceratocone em progressão</strong>.</li>
                        <li>Pessoas com <strong>astigmatismo irregular</strong> elevado causado pelo ceratocone.</li>
                        <li>Visão que não pode ser adequadamente corrigida com óculos.</li>
                        <li>Intolerância ou dificuldade de adaptação às lentes de contato.</li>
                        <li>Pacientes que desejam <strong>adiar ou evitar a necessidade de um transplante de córnea</strong>.</li>
                    </ul>
                    <p>É fundamental que o paciente não tenha cicatrizes centrais na córnea e que a espessura corneana seja adequada para o procedimento.</p>
                </section>
                
                <section id="como-e-feito">
                    <h2>Como é a Experiência da Cirurgia?</h2>
                    <p>O procedimento é ambulatorial, seguro e leva cerca de 15 a 20 minutos.</p>
                    <ol>
                        <li><strong>Anestesia:</strong> A cirurgia é realizada apenas com colírios anestésicos, sendo completamente indolor.</li>
                        <li><strong>Ação do Laser:</strong> O paciente é posicionado no equipamento de Laser de Femtossegundo. O laser cria os túneis na córnea em questão de segundos.</li>
                        <li><strong>Implante:</strong> O cirurgião insere os segmentos do anel nos túneis. Não são necessários pontos.</li>
                        <li><strong>Finalização:</strong> Uma lente de contato terapêutica pode ser colocada para conforto. O paciente é liberado para casa logo após, com um acompanhante.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>Vantagens do Anel com Laser de Femtossegundo</h2>
                    <ul>
                        <li><strong>Alta Precisão e Segurança:</strong> O laser cria túneis perfeitos, reduzindo os riscos da confecção manual.</li>
                        <li><strong>Recuperação Rápida:</strong> Por ser menos invasivo, o retorno às atividades é mais rápido.</li>
                        <li><strong>Reversibilidade:</strong> Caso seja necessário, os anéis podem ser removidos ou trocados.</li>
                        <li><strong>Melhora da Visão:</strong> Reduz o astigmatismo irregular e melhora a acuidade visual.</li>
                        <li><strong>Preservação do Tecido:</strong> Não remove tecido corneano, apenas o remodela.</li>
                        <li><strong>Estabilização do Ceratocone:</strong> Ajuda a retardar a progressão da doença, especialmente quando associado ao Crosslinking.</li>
                    </ul>
                </section>
                
                <section id="cuidados-pos-operatorios">
                    <h2>Cuidados para um Resultado Duradouro</h2>
                    <p>A melhora da visão é gradual e continua por meses. É vital seguir as orientações médicas:</p>
                    <ul>
                        <li>Usar os colírios antibióticos e anti-inflamatórios rigorosamente.</li>
                        <li>Evitar coçar os olhos, uma recomendação para toda a vida para pacientes com ceratocone.</li>
                        <li>Comparecer às consultas de acompanhamento para avaliar o posicionamento do anel e a melhora da visão.</li>
                        <li>Evitar atividades físicas de impacto e mergulhos por algumas semanas.</li>
                    </ul>
                    <p><strong>Dê um passo à frente no controle do ceratocone com a tecnologia mais avançada disponível.</strong></p>
                    <a href="#agendamento" class="cta-button">Agende sua Avaliação para Tratamento de Ceratocone</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia para implante do anel dói?</summary>
                        <p>Não, o procedimento é indolor devido ao uso de colírios anestésicos. Pode haver um leve desconforto ou sensação de corpo estranho nos primeiros dias, que é controlado com medicação.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O Anel de Ferrara cura o ceratocone?</summary>
                        <p>O anel não cura o ceratocone, que é uma doença crônica, mas trata seus efeitos. Ele regulariza a córnea, melhora a visão e pode ajudar a frear a progressão da doença, adiando ou evitando a necessidade de um transplante de córnea.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Vou deixar de usar óculos após o implante do anel?</summary>
                        <p>O objetivo principal do anel é melhorar a qualidade da visão e tornar a córnea mais regular. Muitos pacientes experimentam uma redução significativa do grau e podem ficar independentes dos óculos para algumas atividades, mas o mais comum é que ainda precisem de óculos para uma visão perfeitamente nítida. A grande vantagem é que os óculos passam a funcionar muito melhor do que antes.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O que é Crosslinking? Posso fazer junto com o anel?</summary>
                        <p>O Crosslinking é um procedimento que fortalece a córnea para impedir a progressão do ceratocone. O implante de anel e o crosslinking são tratamentos complementares e, muitas vezes, são realizados em conjunto (no mesmo dia ou em momentos diferentes) para obter os melhores resultados: o anel melhora a visão e o crosslinking "congela" a doença.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Transplante de Córnea Penetrante',
    title:
      'Transplante de Córnea Penetrante (Ceratoplastia): Uma Nova Chance para a Visão',
    description:
      'Entenda o que é o Transplante de Córnea Penetrante, quando ele é necessário e como a cirurgia pode restaurar a visão em casos de doenças graves da córnea. Um guia completo sobre o procedimento, recuperação e cuidados.',
    slug: 'transplante-cornea-penetrante-ceratoplastia',
    imageUrl: TCPImage,
    content: `
                <article>
                <header>
                    <h1>Transplante de Córnea Penetrante (Ceratoplastia): Uma Nova Chance para a Visão</h1>
                </header>
                
                <section id="o-que-e">
                    <p>O <strong>Transplante de Córnea Penetrante</strong>, tecnicamente conhecido como <strong>Ceratoplastia Penetrante</strong>, é um procedimento cirúrgico sofisticado no qual uma córnea doente ou danificada é substituída por uma córnea saudável de um doador humano. Este procedimento é uma esperança real para restaurar a visão de pacientes cuja córnea perdeu sua transparência ou curvatura normal devido a diversas doenças.</p>
                    <p>Este guia foi criado para explicar de forma clara o que é o transplante penetrante, suas indicações e o que esperar durante todo o processo, desde a fila de espera até a recuperação visual.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que Acontece Durante o Transplante?</h2>
                    <p>O transplante penetrante envolve a substituição de <strong>todas as camadas</strong> da córnea. O procedimento é uma microcirurgia delicada e precisa:</p>
                    <ol>
                        <li><strong>Remoção da Córnea Doente:</strong> Utilizando um instrumento circular de alta precisão chamado trépano, o cirurgião remove um botão central de espessura total da córnea danificada do paciente.</li>
                        <li><strong>Preparação da Córnea Doadora:</strong> Um botão de tamanho correspondente é preparado a partir da córnea doadora saudável, fornecida por um banco de olhos certificado.</li>
                        <li><strong>Sutura da Nova Córnea:</strong> A córnea doadora é então cuidadosamente posicionada na abertura e suturada no lugar com fios microcirúrgicos extremamente finos, geralmente mais finos que um fio de cabelo. São necessários múltiplos pontos para garantir uma cicatrização segura.</li>
                    </ol>
                    <p>O objetivo é que a nova córnea se integre perfeitamente, restaurando a transparência e a regularidade necessárias para uma visão clara.</p>
                </section>

                <section id="indicacoes">
                    <h2>Quando o Transplante de Córnea Penetrante é Necessário?</h2>
                    <p>Esta cirurgia é reservada para casos em que a visão está severamente comprometida e outras opções de tratamento não são mais eficazes. As principais indicações incluem:</p>
                    <ul>
                        <li><strong>Ceratocone Avançado:</strong> Quando o ceratocone causa afinamento extremo, cicatrizes ou uma deformação tão severa que nem o anel intracorneano nem as lentes de contato conseguem proporcionar uma visão útil.</li>
                        <li><strong>Cicatrizes Corneanas:</strong> Opacidades resultantes de infecções (como herpes ou bacterianas), traumas ou outras doenças que bloqueiam a passagem da luz.</li>
                        <li><strong>Distrofias de Córnea:</strong> Doenças genéticas que afetam a saúde e a transparência das camadas da córnea, como a Distrofia de Fuchs, em estágios avançados.</li>
                        <li><strong>Perfuração Ocular:</strong> Em casos de acidentes que resultam na perfuração da córnea.</li>
                        <li><strong>Falência de Transplante Prévio:</strong> Quando um transplante anterior perdeu sua transparência.</li>
                    </ul>
                </section>
                
                <section id="como-e-feito">
                    <h2>O Processo da Cirurgia de Transplante</h2>
                    <p>A cirurgia é realizada em um centro cirúrgico hospitalar, com todos os cuidados necessários.</p>
                    <ol>
                        <li><strong>Fila de Espera:</strong> O primeiro passo é a inscrição do paciente na fila de espera por uma córnea doadora, gerenciada pela Central de Transplantes do estado.</li>
                        <li><strong>Anestesia:</strong> O procedimento é geralmente realizado sob anestesia local (bloqueio peribulbar) com sedação, ou anestesia geral, dependendo do caso e da preferência do cirurgião e do paciente.</li>
                        <li><strong>Cirurgia:</strong> O transplante dura, em média, de 1 a 2 horas. Após a troca das córneas e a sutura, um curativo protetor é aplicado.</li>
                        <li><strong>Pós-operatório:</strong> Geralmente, o paciente permanece no hospital por um curto período para observação antes de receber alta para continuar a recuperação em casa.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>O Impacto do Transplante na Vida do Paciente</h2>
                    <ul>
                        <li><strong>Restauração da Visão:</strong> É o benefício mais significativo, permitindo que muitos pacientes voltem a ler, dirigir e ter uma vida independente.</li>
                        <li><strong>Alívio da Dor:</strong> Em casos de doenças dolorosas da córnea, como a ceratopatia bolhosa, o transplante alivia o desconforto.</li>
                        <li><strong>Integridade Estrutural:</strong> Restaura a integridade do olho em casos de afinamento ou perfuração.</li>
                        <li><strong>Melhora Estética:</strong> Substitui uma córnea opaca e esbranquiçada por uma transparente.</li>
                    </ul>
                </section>
                
                <section id="recuperacao">
                    <h2>A Recuperação: Uma Jornada de Cuidado</h2>
                    <p>A recuperação do transplante de córnea é longa e exige um comprometimento rigoroso do paciente. A visão melhora gradualmente ao longo de muitos meses.</p>
                    <ul>
                        <li><strong>Uso de Colírios:</strong> É crucial usar colírios (principalmente corticoides) por um longo período, às vezes por anos, para prevenir a rejeição e a inflamação.</li>
                        <li><strong>Acompanhamento Médico:</strong> As consultas de acompanhamento são frequentes e essenciais para monitorar a cicatrização e detectar sinais de rejeição precocemente.</li>
                        <li><strong>Remoção dos Pontos:</strong> Os pontos podem ser removidos parcial ou totalmente, geralmente após vários meses ou mais de um ano, dependendo da cicatrização.</li>
                        <li><strong>Correção do Grau:</strong> Após a estabilização, é comum que reste um grau residual (astigmatismo e miopia/hipermetropia), que pode ser corrigido com óculos, lentes de contato ou, em alguns casos, cirurgia a laser.</li>
                    </ul>
                    <p><strong>O transplante de córnea é um ato de generosidade que transforma vidas. Se você tem indicação, saiba que há um caminho para recuperar sua visão.</strong></p>
                    <a href="#agendamento" class="cta-button">Converse com nossos especialistas sobre Transplante de Córnea</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O que é a rejeição do transplante de córnea?</summary>
                        <p>A rejeição ocorre quando o sistema imunológico do paciente identifica a córnea doadora como um corpo estranho e a ataca. Os sinais são: dor, vermelhidão, sensibilidade à luz e piora da visão. Se detectada e tratada precocemente com colírios, a rejeição pode ser revertida na maioria dos casos. Por isso, o acompanhamento médico é vital.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quanto tempo demora a fila de espera por uma córnea?</summary>
                        <p>O tempo na fila de espera varia muito de acordo com o estado e a disponibilidade de doadores. Graças à conscientização sobre a doação de órgãos, as filas têm diminuído em muitas regiões do Brasil. Casos de urgência, como perfurações, têm prioridade.</p>
                    </details>

                    <details class="faq-item">
                        <summary>A cirurgia é arriscada?</summary>
                        <p>Como toda cirurgia, existem riscos, como infecção, hemorragia, glaucoma ou descolamento de retina. No entanto, a ceratoplastia penetrante é um procedimento bem estabelecido com altas taxas de sucesso quando realizada por um cirurgião experiente.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Existem outros tipos de transplante de córnea?</summary>
                        <p>Sim. Atualmente, existem os transplantes lamelares, nos quais apenas as camadas doentes da córnea são substituídas (como o DALK para ceratocone e o DMEK/DSAEK para Distrofia de Fuchs). Essas técnicas, quando indicadas, oferecem uma recuperação mais rápida e menor risco de rejeição em comparação com o transplante penetrante.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Injeção Intravítrea Eylia',
    title:
      'Injeção Intravítrea com Eylia (Aflibercepte): Tratamento Avançado para Doenças da Retina',
    description:
      'Entenda como a Injeção Intravítrea com Eylia (aflibercepte) funciona para tratar doenças graves da retina, como a DMRI úmida, o edema macular diabético e a oclusão venosa. Saiba como este moderno medicamento anti-VEGF pode preservar e melhorar sua visão.',
    slug: 'injecao-intravitrea-eylia-aflibercepte-retina',
    imageUrl: IIEImage,
    content: `
                <article>
                <header>
                    <h1>Injeção Intravítrea com Eylia (Aflibercepte): Tratamento Avançado para Doenças da Retina</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Injeção Intravítrea com Eylia (princípio ativo: aflibercepte)</strong> é um dos tratamentos mais modernos e eficazes para uma série de doenças que afetam a retina, a camada sensível à luz no fundo do olho. Este procedimento consiste na aplicação de uma medicação diretamente dentro do olho, no espaço preenchido pelo humor vítreo, para agir de forma concentrada e precisa sobre a mácula e outros tecidos da retina.</p>
                    <p>O Eylia pertence a uma classe de medicamentos conhecidos como <strong>anti-VEGF (Fator de Crescimento Endotelial Vascular)</strong>, que revolucionaram o tratamento de doenças que antes levavam à perda de visão irreversível.</p>
                </section>

                <section id="como-funciona">
                    <h2>Como o Eylia Age na Retina?</h2>
                    <p>Muitas doenças da retina são causadas pelo crescimento de vasos sanguíneos anormais e frágeis, que vazam fluido e sangue, ou pelo inchaço (edema) da mácula, a área central e mais nobre da retina, responsável pela visão de detalhes.</p>
                    <p>O crescimento desses vasos e o vazamento são estimulados por uma proteína chamada VEGF. O <strong>Eylia (aflibercepte) atua como uma "proteína-armadilha"</strong>, bloqueando a ação do VEGF. Ao neutralizar essa proteína, o medicamento consegue:</p>
                    <ul>
                        <li><strong>Reduzir o inchaço (edema)</strong> da mácula.</li>
                        <li><strong>Inibir o crescimento</strong> de novos vasos sanguíneos anormais.</li>
                        <li><strong>Diminuir o vazamento</strong> de fluido e sangue na retina.</li>
                    </ul>
                    <p>Com isso, o tratamento ajuda a estabilizar e, em muitos casos, a melhorar a visão que foi afetada pela doença.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para Quais Doenças a Injeção com Eylia é Indicada?</h2>
                    <p>A terapia anti-VEGF com Eylia é o tratamento de primeira linha para várias condições graves da retina:</p>
                    <ul>
                        <li><strong>Degeneração Macular Relacionada à Idade (DMRI) Úmida ou Exsudativa:</strong> A principal causa de perda de visão em idosos, caracterizada pelo crescimento de vasos anormais sob a mácula.</li>
                        <li><strong>Edema Macular Diabético (EMD):</strong> O inchaço da mácula causado pelo vazamento de vasos sanguíneos em pacientes com retinopatia diabética.</li>
                        <li><strong>Oclusão da Veia Central da Retina (OVCR) e de Ramo (OVR):</strong> O bloqueio de veias da retina que leva ao inchaço macular.</li>
                        <li><strong>Neovascularização Coroidal Miópica:</strong> O surgimento de vasos anormais em pacientes com alta miopia.</li>
                    </ul>
                </section>
                
                <section id="como-e-feito">
                    <h2>Como é o Procedimento da Injeção Intravítrea?</h2>
                    <p>Muitos pacientes sentem apreensão com a ideia de uma injeção no olho, mas o procedimento é <strong>muito rápido, seguro e praticamente indolor</strong>, realizado em ambiente ambulatorial ou no centro cirúrgico.</p>
                    <ol>
                        <li><strong>Preparação:</strong> O olho e a área ao redor são cuidadosamente limpos e esterilizados. Colírios anestésicos são aplicados para garantir que o paciente não sinta dor. Um pequeno instrumento é usado para manter as pálpebras abertas.</li>
                        <li><strong>Injeção:</strong> O médico realiza a injeção com uma agulha extremamente fina na parte branca do olho (esclera). A aplicação da medicação dura apenas alguns segundos.</li>
                        <li><strong>Pós-procedimento:</strong> O paciente pode sentir uma leve pressão ou ver "manchas" ou "bolhas" (o medicamento) no campo de visão, que desaparecem em pouco tempo. Não é necessário usar tampão, e o paciente pode ir para casa logo em seguida.</li>
                    </ol>
                </section>

                <section id="vantagens">
                    <h2>Benefícios do Tratamento com Eylia</h2>
                    <ul>
                        <li><strong>Alta Eficácia:</strong> Comprovadamente eficaz em paralisar a progressão da doença e melhorar a acuidade visual na maioria dos pacientes.</li>
                        <li><strong>Ação Direta:</strong> A medicação é entregue diretamente no local necessário, maximizando o efeito e minimizando os efeitos colaterais no resto do corpo.</li>
                        <li><strong>Procedimento Rápido:</strong> A aplicação leva poucos minutos.</li>
                        <li><strong>Preservação da Visão:</strong> É a melhor ferramenta disponível para evitar a perda de visão causada por estas doenças da retina.</li>
                    </ul>
                </section>
                
                <section id="cuidados-e-frequencia">
                    <h2>Frequência e Cuidados Após a Injeção</h2>
                    <p>O tratamento não é único. Geralmente, inicia-se com uma série de injeções mensais (fase de ataque) para controlar a atividade da doença. Após essa fase, o médico especialista em retina avaliará a resposta e poderá aumentar o intervalo entre as aplicações, personalizando o tratamento para cada paciente (esquema "tratar e estender").</p>
                    <p>Após a injeção, é importante:</p>
                    <ul>
                        <li>Não coçar o olho.</li>
                        <li>Usar os colírios antibióticos prescritos, se for o caso.</li>
                        <li>Entrar em contato com o médico imediatamente se sentir dor forte, vermelhidão intensa ou piora súbita da visão, pois podem ser sinais de complicações raras, como infecção (endoftalmite).</li>
                    </ul>
                    <p><strong>Não deixe que doenças da retina roubem sua visão. O tratamento com Eylia pode fazer a diferença.</strong></p>
                    <a href="#agendamento" class="cta-button">Converse com nosso especialista em Retina</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A injeção no olho dói?</summary>
                        <p>Não. Graças aos colírios anestésicos potentes, o procedimento é praticamente indolor. O paciente pode sentir uma leve sensação de pressão que dura segundos.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quantas injeções vou precisar tomar?</summary>
                        <p>O número de injeções varia para cada paciente e cada doença. É um tratamento contínuo. O objetivo é controlar a doença com o menor número de injeções possível, mas é comum que o tratamento dure vários anos para manter a visão estável.</p>
                    </details>

                    <details class="faq-item">
                        <summary>O tratamento com Eylia cura a doença?</summary>
                        <p>O Eylia, assim como outros anti-VEGFs, não cura a doença de base (como a DMRI ou a diabetes), mas controla sua manifestação na retina (o inchaço e o sangramento). É um tratamento de controle, semelhante ao uso de medicação para pressão alta ou diabetes.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quais são os riscos da injeção intravítrea?</summary>
                        <p>O procedimento é muito seguro. O risco mais sério, embora muito raro (menos de 0,1%), é a infecção intraocular (endoftalmite). Outros riscos incluem aumento transitório da pressão ocular e descolamento de retina, também raros. Por isso, é fundamental realizar o procedimento com um especialista em retina e em um ambiente estéril.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Vitrectomia Posterior',
    title:
      'Vitrectomia Posterior: A Microcirurgia que Salva a Visão em Doenças da Retina e do Vítreo',
    description:
      'Descubra o que é a Vitrectomia Posterior, uma microcirurgia avançada para tratar descolamento de retina, buraco macular, hemorragia vítrea e outras doenças graves. Entenda como o procedimento funciona, suas indicações e como é a recuperação.',
    slug: 'vitrectomia-posterior-cirurgia-retina-vitreo',
    imageUrl: VitImage,
    content: `
                <article>
                <header>
                    <h1>Vitrectomia Posterior: A Microcirurgia que Salva a Visão em Doenças da Retina e do Vítreo</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Vitrectomia Via Pars Plana</strong>, comumente chamada de <strong>Vitrectomia Posterior</strong>, é uma das cirurgias oftalmológicas mais complexas e delicadas, destinada a tratar doenças que afetam o fundo do olho, especificamente o <strong>vítreo</strong> e a <strong>retina</strong>. O vítreo é o gel transparente que preenche a maior parte do globo ocular, e a retina é o tecido nervoso que capta a luz e envia as imagens ao cérebro.</p>
                    <p>Esta microcirurgia permite ao cirurgião especialista em retina acessar o interior do olho para remover o vítreo e tratar diretamente as estruturas danificadas, sendo fundamental para salvar e restaurar a visão em diversas condições graves.</p>
                </section>

                <section id="como-funciona">
                    <h2>Como a Vitrectomia é Realizada?</h2>
                    <p>A vitrectomia é uma cirurgia minimamente invasiva realizada com o auxílio de um microscópio cirúrgico. O cirurgião faz de 3 a 4 microincisões na parte branca do olho (esclera), com menos de 1mm cada.</p>
                    <p>Através dessas incisões, instrumentos de altíssima precisão são inseridos:</p>
                    <ol>
                        <li><strong>Uma fibra óptica</strong> para iluminar o interior do olho.</li>
                        <li><strong>Um vitrectomo</strong>, instrumento que corta e aspira o gel vítreo.</li>
                        <li><strong>Uma linha de infusão</strong> para manter a pressão ocular estável durante a cirurgia, injetando uma solução salina.</li>
                    </ol>
                    <p>Após a remoção do vítreo (total ou parcial), o cirurgião tem o acesso livre para realizar os procedimentos necessários na retina, como remover membranas, aplicar laser ou reposicionar um descolamento. Ao final, o olho é preenchido com uma substância para manter a retina no lugar: solução salina, ar, um gás especial ou óleo de silicone.</p>
                </section>

                <section id="indicacoes">
                    <h2>Quando a Vitrectomia é Indicada?</h2>
                    <p>A vitrectomia é o tratamento de escolha para uma ampla gama de patologias do fundo do olho. As principais são:</p>
                    <ul>
                        <li><strong>Descolamento de Retina:</strong> Para reposicionar a retina que se soltou da parede do olho, uma emergência médica que pode levar à cegueira.</li>
                        <li><strong>Buraco Macular:</strong> Para fechar uma pequena abertura que se forma na mácula (centro da retina), causando perda da visão central.</li>
                        - <strong>Membrana Epirretiniana (MER):</strong> Para remover uma fina camada de tecido cicatricial que cresce sobre a mácula, enrugando-a e distorcendo a visão.</li>
                        <li><strong>Hemorragia Vítrea:</strong> Para remover o sangue que vazou para o interior do olho, geralmente devido à retinopatia diabética ou traumas, e que impede a passagem da luz.</li>
                        <li><strong>Retinopatia Diabética Proliferativa:</strong> Em casos avançados, para tratar sangramentos e descolamentos de retina tracionais causados pela diabetes.</li>
                        <li><strong>Complicações de outras cirurgias oculares</strong>, infecções (endoftalmite) ou traumas.</li>
                    </ul>
                </section>
                
                <section id="como-e-feito">
                    <h2>A Experiência da Cirurgia de Vitrectomia</h2>
                    <p>A cirurgia é realizada em um centro cirúrgico e é mais longa e complexa que outras cirurgias oftalmológicas.</p>
                    <ol>
                        <li><strong>Anestesia:</strong> Geralmente é feita com anestesia local (bloqueio peribulbar) associada a uma sedação profunda, ou anestesia geral, para garantir o conforto e a imobilidade do paciente.</li>
                        <li><strong>Procedimento:</strong> A cirurgia pode durar de uma a várias horas, dependendo da complexidade do caso. O cirurgião realiza a remoção do vítreo e o tratamento específico para a retina.</li>
                        <li><strong>Finalização e Tamponamento:</strong> Ao final, o olho é preenchido com ar, gás ou óleo de silicone. Essa substância (tamponador) serve para pressionar a retina em sua posição correta enquanto ela cicatriza. Um curativo é colocado sobre o olho.</li>
                    </ol>
                </section>
                
                <section id="recuperacao">
                    <h2>Recuperação e Cuidados Pós-Operatórios</h2>
                    <p>A recuperação da vitrectomia exige cuidados especiais e paciência. A visão melhora gradualmente ao longo de semanas ou meses.</p>
                    <ul>
                        <li><strong>Posição da Cabeça:</strong> Dependendo do tamponador utilizado (gás ou óleo), o médico pode solicitar que o paciente mantenha uma posição específica da cabeça (ex: olhar para baixo) por vários dias. Isso é crucial para que a bolha de gás ou óleo exerça pressão no local correto da retina.</li>
                        <li><strong>Restrições:</strong> Voos e viagens para grandes altitudes são estritamente proibidos enquanto houver gás dentro do olho, pois a mudança de pressão pode ser perigosa.</li>
                        <li><strong>Medicação:</strong> O uso de colírios antibióticos e anti-inflamatórios é fundamental.</li>
                        <li><strong>Visão com Gás/Óleo:</strong> Se for usado gás, a visão ficará muito embaçada até que ele seja absorvido pelo corpo (semanas). Se for usado óleo de silicone, a visão melhora, mas o óleo geralmente precisa ser removido em uma segunda cirurgia meses depois.</li>
                    </ul>
                    <p><strong>A vitrectomia é uma ferramenta poderosa na luta contra a cegueira. Confie no seu especialista em retina para guiá-lo neste processo.</strong></p>
                    <a href="#agendamento" class="cta-button">Agende uma Consulta com nosso Especialista em Retina</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia de vitrectomia dói?</summary>
                        <p>Não. A cirurgia é realizada sob anestesia eficaz, sendo indolor. No pós-operatório, pode haver desconforto, sensação de olho pesado ou irritação, que são controlados com a medicação prescrita.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Qual o objetivo do gás ou do óleo de silicone?</summary>
                        <p>Eles funcionam como um "curativo" interno, um tamponador que mantém a retina pressionada contra a parede do olho para permitir que ela cicatrize na posição correta. A escolha entre gás e óleo depende da gravidade do caso e da preferência do cirurgião.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Minha visão voltará ao normal após a vitrectomia?</summary>
                        <p>O objetivo principal da vitrectomia é estabilizar a condição e prevenir a perda total da visão. O grau de recuperação visual depende muito da doença de base e do quão danificada a retina estava antes da cirurgia. Em casos como buraco macular e membrana epirretiniana, a melhora pode ser significativa. Em descolamentos de retina, o objetivo é "salvar" o olho, e a visão final pode variar.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O que acontece com o vítreo que foi removido?</summary>
                        <p>O espaço do vítreo removido é preenchido pelo próprio líquido que o olho produz (humor aquoso) ou pelo tamponador (gás/óleo). O vítreo não se regenera, mas ele não é essencial para o funcionamento do olho após a idade adulta.</p>
                    </details>
                </section>
            </article>
        `
  }
];
