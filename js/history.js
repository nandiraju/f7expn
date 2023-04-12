let history_facts = {
  "01-01":
    "On this day in 1863, the Emancipation Proclamation, which declared all slaves in Confederate-held territory to be free, went into effect.",
  "01-02":
    "On this day in 1492, Granada, the last Muslim kingdom in Spain, fell to the forces of King Ferdinand and Queen Isabella, marking the end of the Reconquista.",
  "01-03":
    "On this day in 1961, the United States severed diplomatic relations with Cuba, following the nationalization of American-owned property by the Castro government.",
  "01-04":
    "On this day in 1847, Samuel Colt received a US patent for the Colt revolver, which revolutionized firearms and became a symbol of the American West.",
  "01-05":
    "On this day in 1925, Nellie Taylor Ross was inaugurated as governor of Wyoming, becoming the first woman to serve as governor in the United States.",
  "01-06":
    "On this day in 1838, Samuel Morse demonstrated his telegraph system for the first time, sending the message 'A patient waiter is no loser.'",
  "01-07":
    "On this day in 1979, Vietnamese forces captured Phnom Penh, the capital of Cambodia, ending the rule of the Khmer Rouge.",
  "01-08":
    "On this day in 1815, Andrew Jackson led American forces to victory over the British in the Battle of New Orleans, the final major battle of the War of 1812.",
  "01-09":
    "On this day in 2007, Apple CEO Steve Jobs introduced the iPhone, revolutionizing the mobile phone industry.",
  "01-10":
    "On this day in 1920, the League of Nations was established as a precursor to the United Nations, with the goal of promoting international cooperation and preventing future wars.",
  "01-11":
    "On this day in 1964, the United States Surgeon General issued the first report linking smoking to health hazards, paving the way for anti-smoking campaigns and regulations.",
  "01-12":
    "On this day in 2005, NASA's Deep Impact space probe was launched on a mission to study the composition of a comet.",
  "01-13":
    "On this day in 1930, Mickey Mouse made his first appearance in a comic strip, becoming one of the most recognizable cartoon characters of all time.",
  "01-14":
    "On this day in 1784, the United States ratified the Treaty of Paris, officially ending the Revolutionary War and recognizing American independence.",
  "01-15":
    "On this day in 1929, civil rights leader Martin Luther King Jr. was born in Atlanta, Georgia.",
  "01-16":
    "On this day in 1920, the 18th Amendment to the United States Constitution went into effect, prohibiting the sale, manufacture, and transportation of alcohol.",
  "01-17":
    "On this day in 1893, Queen Liliuokalani was overthrown in a coup led by American business interests, leading to the annexation of Hawaii by the United States.",
  "01-18":
    "On this day in 1778, the first American military court-martial trial was held, with Lieutenant Colonel Joshua Huddy charged with treason by the British.",
  "01-19":
    "On this day in 1807, Robert E. Lee, the Confederate general who led the Army of Northern Virginia during the Civil War, was born in Virginia.",
  "01-20":
    "On this day in 1961, John F. Kennedy was inaugurated as the 35th President of the United States.",
  "01-21":
    "On this day in 1976, the first commercial Concorde flight took off from London's Heathrow Airport, bound for Bahrain.",
  "01-22":
    "On this day in 1905, the Bloody Sunday massacre occurred in St. Petersburg, Russia, where hundreds of peaceful protesters were shot and killed by the tsar's troops.",
  "01-23":
    "On this day in 1849, Elizabeth Blackwell became the first woman to receive a medical degree in the United States, from Geneva Medical College in New York.",
  "01-24":
    "On this day in 1848, James W. Marshall discovered gold at Sutter's Mill in California, setting off the California Gold Rush.",
  "01-25":
    "On this day in 1949, the first Emmy Awards were presented for excellence in television broadcasting.",
  "01-26":
    "On this day in 1837, Michigan became the 26th state of the United States.",
  "01-27":
    "On this day in 1945, Soviet forces liberated the Auschwitz-Birkenau concentration camp in Poland, revealing the full horror of the Holocaust to the world.",
  "01-28":
    "On this day in 1986, the space shuttle Challenger exploded 73 seconds after liftoff, killing all seven crew members aboard.",
  "01-29":
    "On this day in 1845, Edgar Allan Poe's famous poem 'The Raven' was first published in the New York Evening Mirror.",
  "01-30":
    "On this day in 1948, Indian leader Mahatma Gandhi was assassinated in New Delhi by a Hindu nationalist.",
  "01-31":
    "On this day in 1606, Guy Fawkes, one of the conspirators in the Gunpowder Plot to blow up the British Parliament, was executed in London.",

  "02-01":
    "On this day in 1884, the first volume of the Oxford English Dictionary was published.",
  "02-02":
    "On this day in 1653, New Amsterdam (now New York City) was incorporated.",
  "02-03":
    "On this day in 1870, the Fifteenth Amendment to the United States Constitution was ratified, guaranteeing the right to vote regardless of race.",
  "02-04":
    "On this day in 1932, the first Winter Olympics were held in Lake Placid, New York.",
  "02-05":
    "On this day in 1958, Gamal Abdel Nasser was elected as the President of Egypt.",
  "02-06":
    "On this day in 1952, King George VI of the United Kingdom died, and was succeeded by his daughter, Elizabeth II.",
  "02-07":
    "On this day in 1999, King Hussein of Jordan died, and was succeeded by his son, Abdullah II.",
  "02-08": "On this day in 1910, the Boy Scouts of America was incorporated.",
  "02-09":
    "On this day in 1964, The Beatles made their first appearance on The Ed Sullivan Show.",
  "02-10":
    "On this day in 1996, chess world champion Garry Kasparov lost a game to the computer program Deep Blue.",
  "02-11":
    "On this day in 1990, Nelson Mandela was released from prison after 27 years.",
  "02-12":
    "On this day in 1809, Abraham Lincoln was born in Hodgenville, Kentucky.",
  "02-13":
    "On this day in 1945, Allied forces firebombed the German city of Dresden, killing an estimated 25,000 people.",
  "02-14":
    "On this day in 1929, the St. Valentine's Day Massacre took place in Chicago, Illinois.",
  "02-15":
    "On this day in 1965, Canada's new national flag was raised over Parliament Hill in Ottawa for the first time.",
  "02-16":
    "On this day in 1923, the burial chamber of King Tutankhamun's tomb was unsealed by archaeologist Howard Carter.",
  "02-17":
    "On this day in 1972, the Volkswagen Beetle became the most-produced car in history, surpassing the Ford Model T.",
  "02-18":
    "On this day in 1930, Pluto was discovered by astronomer Clyde Tombaugh.",
  "02-19":
    "On this day in 1942, President Franklin D. Roosevelt signed Executive Order 9066, authorizing the internment of Japanese Americans during World War II.",
  "02-20":
    "On this day in 1962, John Glenn became the first American to orbit the Earth.",
  "02-21": "On this day in 1965, Malcolm X was assassinated in New York City.",
  "02-22":
    "On this day in 1732, George Washington was born in Westmoreland County, Virginia.",
  "02-23":
    "On this day in 1954, the first mass inoculation of children against polio with the Salk vaccine began in Pittsburgh, Pennsylvania.",
  "02-24":
    "On this day in 1981, Buckingham Palace announced the engagement of Prince Charles and Lady Diana Spencer.",
  "02-25":
    "On this day in 1836, Samuel Colt received a patent for his revolver.",
  "02-26":
    "On this day in 1993, a truck bomb exploded at the World Trade Center in New York City, killing six people and injuring over 1,000.",
  "02-27":
    "On this day in 1933, the Reichstag building in Berlin, Germany was set on fire in an act of arson, which the Nazis used as a pretext to suspend civil liberties and consolidate power.",
  "02-28":
    "On this day in 1991, the Gulf War ended after a coalition of countries led by the United States defeated Iraq.",
  "02-29":
    "On this day in 1692, the first warrants were issued in the Salem witch trials in Massachusetts, sparking a wave of hysteria and leading to the execution of 20 people.",

  "03-01":
    "On this day in 1961, President John F. Kennedy established the Peace Corps to promote world peace and friendship.",
  "03-02":
    "On this day in 1962, Wilt Chamberlain scored 100 points in a single NBA basketball game, the highest individual score in history.",
  "03-03":
    "On this day in 1931, 'The Star-Spangled Banner' was officially adopted as the national anthem of the United States.",
  "03-04":
    "On this day in 1789, the United States Constitution went into effect as the first Congress met in New York City.",
  "03-05":
    "On this day in 1953, Soviet dictator Joseph Stalin died at the age of 74, after ruling the Soviet Union for over 30 years.",
  "03-06":
    "On this day in 1964, Malcolm X announced his split from the Nation of Islam, the organization he had been a part of since 1952.",
  "03-07":
    "On this day in 1876, Alexander Graham Bell received a patent for the invention of the telephone.",
  "03-08":
    "On this day in 1917, the Russian Revolution began with protests in Petrograd, now known as St. Petersburg.",
  "03-09":
    "On this day in 1959, the first Barbie doll went on display at the American International Toy Fair in New York City.",
  "03-10":
    "On this day in 1876, the first successful telephone call was made by Alexander Graham Bell, to his assistant Thomas Watson.",
  "03-11":
    "On this day in 1990, Lithuania became the first Soviet republic to declare independence from the Soviet Union.",
  "03-12":
    "On this day in 1930, Mahatma Gandhi began a 240-mile march to protest the British monopoly on salt in India, known as the Salt March.",
  "03-13":
    "On this day in 1781, William Herschel discovered Uranus, the first new planet to be discovered since ancient times.",
  "03-14":
    "On this day in 1879, Albert Einstein was born in Ulm, Germany. He would go on to become one of the most famous scientists in history.",
  "03-15":
    "On this day in 44 BC, Julius Caesar was assassinated by a group of Roman senators, led by Marcus Junius Brutus.",
  "03-16":
    "On this day in 1968, American soldiers massacred over 500 Vietnamese civilians in the village of My Lai, during the Vietnam War.",
  "03-17":
    "On this day in 1762, the first St. Patrick's Day parade was held in New York City, by Irish soldiers serving in the British army.",
  "03-18":
    "On this day in 1962, France and the Algerian National Liberation Front signed the Evian Accords, ending the Algerian War.",
  "03-19":
    "On this day in 1916, eight-hundred British soldiers were killed in the Battle of the Somme during World War I.",
  "03-20":
    "On this day in 1852, Harriet Beecher Stowe's famous novel 'Uncle Tom's Cabin' was published, helping to fuel the abolitionist movement.",
  "03-21":
    "On this day in 1965, civil rights activists led by Martin Luther King Jr. began a march from Selma to Montgomery, Alabama, to demand voting rights for African Americans.",
  "03-22":
    "In 1765, the British Parliament passed the Stamp Act, which imposed a tax on newspapers, legal documents, and other printed materials in the American colonies.",
  "03-23":
    "In 1775, Patrick Henry delivered his famous 'Give me liberty or give me death' speech in Virginia.",
  "03-24":
    "In 1989, the Exxon Valdez oil spill occurred in Alaska, releasing over 11 million gallons of oil into the ocean.",
  "03-25":
    "In 1957, the Treaty of Rome was signed, establishing the European Economic Community.",
  "03-26":
    "In 1979, the Camp David peace treaty was signed between Israel and Egypt.",
  "03-27":
    "In 1964, the strongest earthquake in U.S. history, with a magnitude of 9.2, struck Alaska.",
  "03-28":
    "In 1979, a partial meltdown occurred at the Three Mile Island nuclear power plant in Pennsylvania.",
  "03-29": "In 1973, the last United States combat troops left South Vietnam.",
  "03-30":
    "In 1981, President Ronald Reagan was shot and wounded by John Hinckley Jr. in Washington, D.C.",
  "03-31": "In 1889, the Eiffel Tower was inaugurated in Paris, France.",

  "04-01":
    "In 1976, Apple Inc. was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne.",
  "04-02":
    "In 2005, Pope John Paul II died in Vatican City after serving as pope for over 26 years.",
  "04-03":
    "In 1860, the first successful Pony Express run from Saint Joseph, Missouri to Sacramento, California began.",
  "04-04":
    "In 1968, civil rights leader Martin Luther King Jr. was assassinated in Memphis, Tennessee.",
  "04-05": "In 1955, Winston Churchill resigned as British Prime Minister.",
  "04-06":
    "In 1896, the first modern Olympic Games were held in Athens, Greece.",
  "04-07": "In 1948, the World Health Organization was founded.",
  "04-08":
    "In 1974, Hank Aaron hit his 715th career home run, breaking Babe Ruth's record.",
  "04-09":
    "In 1865, General Robert E. Lee surrendered to General Ulysses S. Grant, effectively ending the American Civil War.",
  "04-10":
    "In 1912, the Titanic set sail from Southampton, England on its ill-fated maiden voyage.",
  "04-11": "In 1970, Apollo 13 was launched from Cape Canaveral, Florida.",
  "04-12": "In 1961, Yuri Gagarin became the first human to travel into space.",
  "04-13":
    "In 1743, Thomas Jefferson, the third President of the United States, was born in Virginia.",
  "04-14":
    "In 1865, President Abraham Lincoln was shot and mortally wounded by John Wilkes Booth at Ford's Theatre in Washington, D.C.",
  "04-15":
    "In 1912, the RMS Titanic sank in the North Atlantic Ocean after hitting an iceberg.",
  "04-16":
    "In 1947, a massive explosion occurred at the Texas City Port, killing nearly 600 people.",
  "04-17": "In 1961, the Bay of Pigs invasion of Cuba began.",
  "04-18":
    "In 1775, Paul Revere made his famous ride, warning American colonists that the British were coming.",
  "04-19":
    "In 1775, the American Revolutionary War began with the Battles of Lexington and Concord.",
  "04-20":
    "In 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico, causing the largest marine oil spill in history.",
  "04-21":
    "In 753 BC, according to legend, Romulus and Remus founded the city of Rome.",
  "04-22": "In 1970, the first Earth Day was celebrated.",
  "04-23":
    "In 1616, William Shakespeare, widely considered to be one of the greatest playwrights in history, died in Stratford-upon-Avon, England.",
  "04-24":
    "In 1800, the Library of Congress was established in Washington, D.C.",
  "04-25":
    "In 1953, James Watson and Francis Crick published their discovery of the double helix structure of DNA.",
  "04-26":
    "In 1986, the Chernobyl nuclear power plant in Ukraine experienced a catastrophic meltdown.",
  "04-27":
    "In 1865, the steamboat Sultana exploded on the Mississippi River, killing over 1,800 passengers.",

  "04-28":
    "In 2001, Dennis Tito became the first space tourist, visiting the International Space Station",
  "04-29":
    "In 1975, the Vietnam War ended as North Vietnamese forces captured Saigon",
  "04-30":
    "In 1789, George Washington was inaugurated as the first President of the United States",

  "05-01": "In 1931, the Empire State Building in New York City was dedicated",
  "05-02":
    "In 2011, Osama bin Laden, the founder of al-Qaeda, was killed by United States special forces in Pakistan",
  "05-03":
    "In 1947, the Constitution of Japan went into effect, establishing a democratic government",
  "05-04":
    "In 1970, the Ohio National Guard opened fire on unarmed students at Kent State University, killing four and injuring nine others",
  "05-05":
    "In 1821, Napoleon Bonaparte died in exile on the island of Saint Helena",
  "05-06":
    "In 1954, Roger Bannister of Great Britain became the first person to run a mile in under four minutes",
  "05-07":
    "In 1945, Germany surrendered to the Allied Powers, ending World War II in Europe",
  "05-08":
    "In 1945, Victory in Europe Day (VE Day) was celebrated in the United Kingdom and Europe",
  "05-09":
    "In 1960, the FDA approved the first oral contraceptive pill for use in the United States",
  "05-10":
    "In 1869, the First Transcontinental Railroad was completed in Promontory, Utah",
  "05-11":
    "In 330, Constantinople was consecrated as the new capital of the Roman Empire by Emperor Constantine the Great",
  "05-12":
    "In 2008, a major earthquake struck Sichuan, China, killing nearly 70,000 people",
  "05-13":
    "In 1981, Pope John Paul II was shot and critically wounded in St. Peter's Square in Vatican City",
  "05-14":
    "In 1804, the Lewis and Clark Expedition officially began its journey from St. Louis, Missouri, to the Pacific coast",
  "05-15":
    "In 1932, the Maybach, the first car with a V12 engine, was presented at the Berlin Motor Show",
  "05-16":
    "In 1929, the first Academy Awards ceremony was held in Hollywood, California",
  "05-17":
    "In 1954, the United States Supreme Court issued its landmark decision in Brown v. Board of Education, declaring that segregation in public schools was unconstitutional",
  "05-18":
    "In 1980, the Mount St. Helens volcano in Washington state erupted, killing 57 people and causing extensive damage",
  "05-19":
    "In 1962, Marilyn Monroe sang 'Happy Birthday, Mr. President' to John F. Kennedy at Madison Square Garden",
  "05-20":
    "In 1873, Levi Strauss and Jacob Davis received a U.S. patent for blue jeans with copper rivets",
  "05-21":
    "In 1927, Charles Lindbergh landed in Paris, completing the first solo non-stop flight across the Atlantic",
  "05-22":
    "In 1856, Congressman Preston Brooks of South Carolina beat Senator Charles Sumner of Massachusetts with a cane on the floor of the United States Senate",
  "05-23":
    "In 1934, bank robbers Bonnie Parker and Clyde Barrow were killed in a police ambush in Bienville Parish, Louisiana",
  "05-24":
    "In 1883, the Brooklyn Bridge, linking Brooklyn and Manhattan in New York City, was opened",
  "05-25":
    "In 1961, American President John F. Kennedy announced the goal of sending astronauts to the moon by the end of the decade.",
  "05-26": "In 1896, the Dow Jones Industrial Average was first published.",
  "05-27":
    "In 1937, the Golden Gate Bridge in San Francisco, California, opened to pedestrian traffic.",
  "05-28":
    "In 1959, the United States launched a monkey named Able and a smaller monkey named Miss Baker into space in a Jupiter missile nose cone.",
  "05-29":
    "In 1953, Sir Edmund Hillary and Tenzing Norgay became the first people to reach the summit of Mount Everest.",
  "05-30":
    "In 1431, Joan of Arc was burned at the stake in Rouen, France, after being convicted of heresy.",
  "05-31":
    "In 1859, Big Ben, the great bell of the clock at the Palace of Westminster in London, was cast.",

  "06-01": "In 1792, Kentucky became the 15th state to join the United States.",
  "06-02":
    "In 1953, Queen Elizabeth II was crowned at Westminster Abbey in London.",
  "06-03":
    "In 1965, Edward H. White II became the first American astronaut to conduct a spacewalk during the Gemini 4 mission.",
  "06-04":
    "In 1940, the evacuation of Allied soldiers from the beaches of Dunkirk, France, began during World War II.",
  "06-05":
    "In 1967, the Six-Day War between Israel and its Arab neighbors ended with a ceasefire.",
  "06-06":
    "In 1944, Allied forces landed on the beaches of Normandy, France, during World War II.",
  "06-07": "In 1929, the Vatican City became an independent state.",
  "06-08": "In 632, the Prophet Muhammad, founder of Islam, died in Medina.",
  "06-09":
    "In 1934, Donald Duck made his debut in the animated short The Wise Little Hen.",
  "06-10":
    "In 1940, Italy declared war on France and the United Kingdom during World War II.",
  "06-11":
    "In 1770, Captain James Cook discovered the Great Barrier Reef off the coast of Australia.",
  "06-12":
    'In 1987, U.S. President Ronald Reagan gave a famous speech in which he called on Soviet leader Mikhail Gorbachev to "tear down this wall" in reference to the Berlin Wall.',
  "06-13":
    "In 1971, The New York Times began publishing the Pentagon Papers, a classified study of the Vietnam War.",
  "06-14":
    "In 1777, the Continental Congress adopted the Stars and Stripes as the flag of the United States.",
  "06-15":
    "In 1215, King John of England signed the Magna Carta, a document that established the principle of the rule of law and limited the power of the monarchy.",
  "06-16":
    "In 1963, Valentina Tereshkova became the first woman to go into space.",
  "06-17":
    "In 1885, the Statue of Liberty arrived in New York City from France.",
  "06-18":
    "In 1983, astronaut Sally Ride became the first American woman to travel to space.",
  "06-19":
    "In 1865, Union General Gordon Granger arrived in Galveston, Texas, and announced that all slaves in the state were free, an event that is now celebrated as Juneteenth.",
  "06-20":
    'In 1963, the United States and the Soviet Union agreed to set up a "hotline" to improve communication and reduce the risk of nuclear war.',
  "06-21":
    "In 1982, John Hinckley Jr. was found not guilty by reason of insanity for the attempted assassination of U.S. President Ronald Reagan.",
  "06-22": "In 1941, Germany invaded the Soviet Union during World War II.",
  "06-23":
    "In 1314, Scottish forces led by Robert the Bruce defeated the English at the Battle of Bannockburn.",
  "06-24": "In 1901, Pablo Picasso's first major exhibition opened in Paris.",
  "06-25":
    "In 1950, the Korean War began with the invasion of South Korea by North Korea.",
  "06-26":
    "In 1945, the United Nations Charter was signed in San Francisco, California.",
  "06-27":
    "In 1893, the New York stock market crashed, leading to the Panic of 1893.",
  "06-28":
    "In 1914, Archduke Franz Ferdinand of Austria and his wife Sophie were assassinated in Sarajevo, Bosnia, sparking the outbreak of World War I.",
  "06-29":
    "In 1613, the original Globe Theatre in London, England burned down during a performance of Shakespeare's Henry VIII.",
  "06-30":
    "In 1860, the famous debate between Abraham Lincoln and Stephen A. Douglas took place in Freeport, Illinois.",
  "07-01":
    "In 1863, the Battle of Gettysburg began in Pennsylvania during the American Civil War.",
  "07-02":
    "In 1964, U.S. President Lyndon B. Johnson signed the Civil Rights Act into law, banning discrimination on the basis of race and gender.",
  "07-03":
    "In 1775, George Washington took command of the Continental Army during the American Revolutionary War.",
  "07-04":
    "In 1776, the United States declared its independence from Great Britain.",
  "07-05":
    "In 1996, Dolly the sheep, the first mammal to be cloned from an adult cell, was born.",
  "07-06":
    "In 1957, Althea Gibson became the first African American to win the women's singles title at Wimbledon.",
  "07-07":
    "In 1937, the Second Sino-Japanese War began with the Marco Polo Bridge Incident.",
  "07-08":
    "In 1776, the first public reading of the Declaration of Independence was held in Philadelphia, Pennsylvania.",
  "07-09":
    "In 1896, William Jennings Bryan delivered his famous 'Cross of Gold' speech at the Democratic National Convention.",
  "07-10":
    "In 1962, Telstar, the world's first communications satellite, was launched into orbit.",
  "07-11":
    "In 1804, U.S. Vice President Aaron Burr killed former Secretary of the Treasury Alexander Hamilton in a duel.",
  "07-12":
    "In 1862, the Medal of Honor, the United States' highest military decoration, was first authorized.",
  "07-13":
    "In 1985, Live Aid, a dual-venue benefit concert organized by Bob Geldof and Midge Ure, was held to raise funds for the Ethiopian famine.",
  "07-14":
    "In 1789, the French Revolution began with the storming of the Bastille prison in Paris.",
  "07-15":
    "In 1099, Jerusalem was captured by Crusaders during the First Crusade.",
  "07-16":
    "In 1969, the Apollo 11 mission was launched, with astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins aboard.",
  "07-17":
    "In 1955, Disneyland, the first Disney theme park, opened in Anaheim, California.",
  "07-18": "In 1925, Adolf Hitler published his book 'Mein Kampf.'",
  "07-19":
    "In 1848, the first Women's Rights Convention was held in Seneca Falls, New York.",
  "07-20":
    "In 1969, Neil Armstrong became the first human to step on the moon, declaring 'That's one small step for man, one giant leap for mankind.'",
  "07-21":
    "In 1925, the famous 'Monkey Trial' ended with teacher John T. Scopes being found guilty of teaching evolution in Tennessee.",
  "07-22":
    "In 1298, the Battle of Falkirk took place between the armies of King Edward I of England and William Wallace of Scotland.",
  "07-23": "In 1903, Ford Motor Company was incorporated in Detroit, Michigan.",
  "07-24":
    "In 1847, Brigham Young and the first group of Mormon pioneers entered the Salt Lake Valley in present-day Utah.",
  "07-25":
    "In 1956, the Italian luxury liner Andrea Doria sank off the coast of Nantucket, Massachusetts,the Swedish ship Stockholm.",
  "07-26":
    "In 1945, Winston Churchill, Harry S. Truman, and Joseph Stalin met in Potsdam, Germany, to discuss the post-World War II world.",
  "07-27":
    "In 1940, Bugs Bunny made his official debut in the Warner Bros. cartoon 'A Wild Hare.'",
  "07-28":
    "In 1914, World War I began when Austria-Hungary declared war on Serbia.",
  "07-29":
    "In 1958, the National Aeronautics and Space Administration (NASA) was established.",
  "07-30":
    "In 1975, former Teamsters union leader Jimmy Hoffa disappeared from the parking lot of a restaurant in Bloomfield Hills, Michigan.",
  "07-31":
    "In 1498, Christopher Columbus became the first European to discover the island of Trinidad during his third voyage to the Americas.",

  "08-01":
    "On August 1, 1914, Germany declared war on Russia, launching World War I.",
  "08-02":
    "On August 2, 1990, Iraq invaded Kuwait, prompting the United Nations to impose economic sanctions.",
  "08-03":
    "On August 3, 1492, Christopher Columbus set sail from Spain in search of a westward route to the Indies.",
  "08-04":
    "On August 4, 1944, the Allied forces of World War II liberated Paris from Nazi occupation.",
  "08-05":
    "On August 5, 1962, Jamaica gained its independence from the United Kingdom.",
  "08-06":
    "On August 6, 1945, the United States dropped an atomic bomb on the Japanese city of Hiroshima.",
  "08-07":
    "On August 7, 1782, George Washington created the Order of the Purple Heart, a military decoration awarded to those wounded or killed in service.",
  "08-08":
    "On August 8, 1974, President Nixon resigned in the wake of the Watergate scandal.",
  "08-09":
    "On August 9, 1945, the United States dropped an atomic bomb on the Japanese city of Nagasaki.",
  "08-10":
    "On August 10, 1821, Missouri became the 24th state of the United States.",
  "08-11":
    "On August 11, 1977, Elvis Presley, the King of Rock 'n' Roll, died at his Graceland home in Memphis.",
  "08-12":
    "On August 12, 1898, the Hawaiian Islands were formally annexed by the United States.",
  "08-13":
    "On August 13, 1961, East Germany began erecting the Berlin Wall, a barrier that separated the city into East and West Berlin.",
  "08-14":
    "On August 14, 1945, Japan surrendered to the Allied forces, effectively ending World War II.",
  "08-15":
    "On August 15, 1947, India gained its independence from the British Empire.",
  "08-16": "On August 16, 1977, the first Apple II computer went on sale.",
  "08-17":
    "On August 17, 1959, Hawaii became the 50th state of the United States.",
  "08-18":
    "On August 18, 1920, the 19th Amendment to the US Constitution was ratified, granting women the right to vote.",
  "08-19":
    "On August 19, 1977, The Clash released their debut album, “The Clash”.",
  "08-20":
    "On August 20, 1968, Warsaw Pact forces invaded Czechoslovakia in an effort to crush the Prague Spring reform movement.",
  "08-21":
    "On August 21, 1858, the first transatlantic telegraph cable was successfully laid, allowing for nearly instantaneous communication between Europe and North America.",
  "08-22":
    "On August 22, 1932, Amelia Earhart became the first woman to fly solo across the Atlantic Ocean.",
  "08-23": "On August 23, 1939, the Nazi-Soviet Nonaggression Pact was signed.",
  "08-24":
    "On August 24, 79 AD, Mount Vesuvius erupted, burying the Roman cities of Pompeii and Herculaneum in ash.",
  "08-25": "On August 25, 1916, the National Park Service was established.",
  "08-26":
    "On August 26, 1920, the 19th Amendment to the US Constitution was officially certified into law, granting women the right to vote.",
  "08-27":
    "On August 27, 1883, the eruption of Krakatoa began, producing the loudest sound ever recorded.",
  "08-28":
    "On August 28, 1963, Martin Luther King Jr. delivered his famous “I Have a Dream” speech during the March on Washington.",
  "08-29":
    "On August 29, 2005, Hurricane Katrina made landfall on the Gulf Coast of the United States.",
  "08-30":
    "On August 30, 1967, Thurgood Marshall was sworn in as the first African American Justice of the Supreme Court of the United States.",
  "08-31":
    "On August 31, 1997, Princess Diana of Wales died in a car crash in Paris.",

  "09-01":
    "In 1666, The Great Fire of London began on this day, eventually destroying 80 percent of the city.",
  "09-02":
    "In 1945, Japan formally surrendered to the Allies, ending World War II.",
  "09-03":
    "In 1783, the Treaty of Paris was signed, ending the American Revolutionary War.",
  "09-04":
    "In 1957, the United States and Canada jointly announced the successful testing of the first nuclear-powered submarine, the USS Nautilus.",
  "09-05":
    "In 1939, the United Kingdom declared war on Germany, beginning World War II.",
  "09-06":
    "In 1901, President William McKinley was assassinated by anarchist Leon Czolgosz in Buffalo, New York.",
  "09-07":
    "In 1776, the Continental Congress officially adopted the Declaration of Independence.",
  "09-08":
    "In 1974, President Gerald Ford granted a full and unconditional pardon to former President Richard Nixon.",
  "09-09": "In 1850, California became the 31st state in the United States.",
  "09-10":
    "In 1608, John Smith was elected as the first president of the Jamestown colony in Virginia.",
  "09-11":
    "In 2001, terrorists attacked the United States with hijacked airplanes, killing nearly 3,000 people.",
  "09-12": "In 1962, The Beatles released their first single, “Love Me Do”.",
  "09-13":
    "In 1848, the first women's rights convention was held in Seneca Falls, New York.",
  "09-14":
    "In 1814, Francis Scott Key wrote the poem that would become the lyrics to “The Star-Spangled Banner.”",
  "09-15": "In 1789, the United States Treasury Department was established.",
  "09-16":
    "In 1920, the 19th Amendment to the US Constitution was ratified, giving women the right to vote.",
  "09-17":
    "In 1787, the Constitution of the United States was signed in Philadelphia, Pennsylvania.",
  "09-18": "In 1810, Mexico declared its independence from Spain.",
  "09-19":
    "In 1846, the Planet Neptune was discovered by German astronomer Johann Gottfried Galle.",
  "09-20":
    "In 1873, the first official college football game was played between Rutgers and Princeton.",
  "09-21":
    "In 1780, British troops under the command of Benedict Arnold burned down the city of New London, Connecticut.",
  "09-22":
    "In 1862, President Abraham Lincoln issued the Emancipation Proclamation, freeing all slaves in the United States.",
  "09-23":
    "In 1779, the American navy defeated the British at the Battle of Flamborough Head off the coast of England.",
  "09-24": "In 1789, the first United States Congress met in New York City.",
  "09-25":
    "In 1789, the United States Bill of Rights was proposed by Congress.",
  "09-26":
    "In 1960, the first televised presidential debate took place between Richard Nixon and John F. Kennedy.",
  "09-27":
    "In 1777, the Continental Congress adopted the Stars and Stripes as the official flag of the United States of America.",
  "09-28":
    "In 1810, Mexico became an independent nation after a 10-year war of revolution against Spain.",
  "09-29": "In 1789, the United States War Department was established.",
  "09-30":
    "In 1791, the first ten amendments to the United States Constitution were ratified, becoming known as the Bill of Rights.",

  "10-01": "In 1845, the U.S. Naval Academy opened in Annapolis, Maryland.",
  "10-02":
    "In 1908, the first production Model T Ford was completed at the company's Piquette Avenue plant in Detroit.",
  "10-03":
    "In 1908, the Chicago Cubs beat the Detroit Tigers to win the World Series.",
  "10-04":
    "In 1957, the Soviet Union launched Sputnik I, the first artificial satellite to orbit the Earth.",
  "10-05":
    "In 1967, Thurgood Marshall was sworn in as the first African-American justice of the Supreme Court.",
  "10-06":
    "In 1977, anwar Sadat became the first Egyptian president to address the Israeli Knesset.",
  "10-07":
    "In 1985, the Greenpeace ship Rainbow Warrior was bombed and sunk in Auckland, New Zealand.",
  "10-08":
    "In 1991, the United Nations officially came into existence with the ratification of a new Charter by the five permanent members of the Security Council.",
  "10-09":
    "In 1995, O.J. Simpson was acquitted of the murders of Nicole Brown Simpson and Ronald Goldman.",
  "10-10":
    "In 2001, the United States began bombing Afghanistan in response to the September 11th terrorist attacks.",
  "10-11":
    "In 2003, the European Union admitted its 10th member, the Czech Republic.",
  "10-12":
    "In 2005, Saddam Hussein was sentenced to death in Iraq for crimes against humanity.",
  "10-13":
    "In 2008, the Large Hadron Collider was switched on for the first time at CERN in Geneva, Switzerland.",
  "10-14":
    "In 2012, the Mars Science Laboratory spacecraft, carrying the Curiosity rover, was launched from Florida.",
  "10-15":
    "In 2014, the World Health Organization declared the Ebola outbreak in West Africa to be an international public health emergency.",
  "10-16":
    "In 2017, the United States and Turkey suspended visa services in a diplomatic dispute.",
  "10-17":
    "In 2019, the first commercial flight from the United Arab Emirates to Israel arrived in Tel Aviv.",
  "10-18":
    "In 1469, the marriage of Ferdinand of Aragon and Isabella of Castile, rulers of two of the largest kingdoms in Spain, took place.",
  "10-19":
    "In 1781, the British army under Lord Cornwallis surrendered at Yorktown, Virginia, ending the American Revolution.",
  "10-20":
    "In 1803, the United States Senate ratified the Louisiana Purchase treaty, doubling the size of the nation.",
  "10-21":
    "In 1805, a combined British and Spanish fleet defeated a French fleet at the Battle of Trafalgar, ending Napoleon's plans to invade Britain.",
  "10-22":
    "In 1940, the first section of the Pennsylvania Turnpike, America's first superhighway, opened to traffic.",
  "10-23":
    "In 1973, President Richard Nixon agreed to turn over White House tape recordings subpoenaed by the Watergate special prosecutor.",
  "10-24":
    "In 1975, the New York Daily News published the 'Ford to City: Drop Dead' headline, marking the city's financial crisis.",
  "10-25":
    "In 1991, the United Nations General Assembly rescinded its 1975 resolution equating Zionism with racism.",
  "10-26": "In 2001, Apple introduced the iPod digital music player.",
  "10-27":
    "In 2005, the Mars Reconnaissance Orbiter was launched from Cape Canaveral on a mission to study the surface of Mars.",
  "10-28":
    "In 2008, the Large Hadron Collider was officially inaugurated at CERN in Geneva, Switzerland.",
  "10-29":
    "In 2013, the United Nations General Assembly adopted a resolution calling for an end to female genital mutilation.",
  "10-30":
    "In 2015, the World Health Organization declared that the spread of polio was a global health emergency.",
  "10-31":
    "In 2018, the United States, Canada, and Mexico signed the United States-Mexico-Canada Agreement, replacing the North American Free Trade Agreement.",
  "11-01":
    "November 1st is All Saints Day, a Catholic holiday in honor of those who have died.",
  "11-02":
    "On November 2nd, 1512, Michelangelo's painting on the ceiling of the Sistine Chapel in Rome was first exhibited to the public.",
  "11-03":
    "November 3rd is the anniversary of the launch of the first artificial satellite, Sputnik 1, in 1957.",
  "11-04":
    "November 4th marks the death anniversary of Karl Marx, the philosopher, revolutionary and economist, in 1883.",
  "11-05":
    "November 5th marks the start of the American Revolutionary War in 1775.",
  "11-06":
    "November 6th is the anniversary of the ending of the Berlin Blockade and the start of the Berlin Airlift in 1948.",
  "11-07":
    "November 7th is the anniversary of the sinking of the British battleship HMS Royal Oak by a German U-boat in 1939.",
  "11-08":
    "November 8th is the anniversary of the start of the Spanish-American War in 1898.",
  "11-09":
    "November 9th is the anniversary of the fall of the Berlin Wall in 1989.",
  "11-10":
    "November 10th is the anniversary of the signing of the armistice of World War I in 1918.",
  "11-11":
    "November 11th is Veterans Day in the United States, commemorating the end of World War I in 1918.",
  "11-12":
    "November 12th marks the anniversary of the death of Christopher Columbus in 1506.",
  "11-13":
    "November 13th is the anniversary of the founding of the United Nations in 1945.",
  "11-14":
    "November 14th is the anniversary of the death of Martin Luther, the founder of Protestantism, in 1546.",
  "11-15":
    "November 15th marks the anniversary of the death of the Romanov family in 1918.",
  "11-16":
    "November 16th marks the anniversary of the end of the American Revolutionary War in 1783.",
  "11-17":
    "November 17th is the anniversary of the death of Marie Antoinette, the last queen of France, in 1793.",
  "11-18":
    "November 18th is the anniversary of the end of the Spanish-American War in 1898.",
  "11-19":
    "November 19th is the anniversary of the first flight of the Wright Brothers in 1903.",
  "11-20":
    "November 20th is the anniversary of the death of President Abraham Lincoln in 1865.",
  "11-21":
    "November 21st is the anniversary of the fall of the Aztec Empire in 1519.",
  "11-22":
    "November 22nd is the anniversary of the death of John F. Kennedy, the 35th president of the United States, in 1963.",
  "11-23":
    "November 23rd is the anniversary of the start of the Korean War in 1950.",
  "11-24":
    "November 24th is the anniversary of the birth of Charles Darwin, the scientist who developed the theory of evolution, in 1809.",
  "11-25":
    "November 25th is the anniversary of the death of Winston Churchill, the British Prime Minister during World War II, in 1965.",
  "11-26":
    "November 26th is the anniversary of the first electronic television broadcast in 1927.",
  "11-27":
    "November 27th is the anniversary of the start of the American Civil War in 1861.",
  "11-28":
    "November 28th is the anniversary of the end of the Korean War in 1953.",
  "11-29":
    "November 29th is the anniversary of the death of Anne Frank, a Jewish diarist during World War II, in 1945.",
  "11-30":
    "November 30th is the anniversary of the death of Mahatma Gandhi, the spiritual leader of India's independence movement, in 1948.",

  "12-01":
    "In 1941, the United States declared war on Japan, bringing the United States into World War II.",
  "12-02":
    "In 1823, President James Monroe declared the Monroe Doctrine, stating that the European powers should no longer colonize or interfere in the affairs of the newly independent nations of the Americas.",
  "12-03": "In 1967, the first heart transplant occurred in South Africa.",
  "12-04":
    "In 1914, the first successful transatlantic radio transmission took place, when British engineer Reginald Fessenden sent a message from Massachusetts to ships at sea.",
  "12-05":
    "In 1933, the United States ratified the 21st Amendment, repealing Prohibition.",
  "12-06":
    "In 1947, the United Nations approved a resolution to partition Palestine into a Jewish and Arab state.",
  "12-07":
    "In 1787, Delaware became the first state to ratify the United States Constitution.",
  "12-08":
    "In 1941, the United States declared war on Germany, bringing the United States into World War II.",
  "12-09":
    "In 1948, the United Nations General Assembly adopted the Universal Declaration of Human Rights.",
  "12-10":
    "In 1817, Mississippi was admitted as the 20th state of the United States.",
  "12-11":
    "In 1916, the first successful blood transfusion was performed in the United States.",
  "12-12":
    "In 1987, the Intermediate-Range Nuclear Forces Treaty was signed between the United States and the Soviet Union.",
  "12-13":
    "In 1833, Oberlin College in Ohio became the first college in the United States to admit African American students.",
  "12-14":
    "In 1905, the Nobel Prize was established by Swedish chemist Alfred Nobel.",
  "12-15":
    "In 1791, the first ten amendments to the United States Constitution, known as the Bill of Rights, were ratified.",
  "12-16":
    "In 1773, the Boston Tea Party occurred in Massachusetts, an act of protest against taxes levied by the British government on the American colonists.",
  "12-17":
    "In 1903, the Wright Brothers successfully flew the first powered aircraft in Kitty Hawk, North Carolina.",
  "12-18":
    "In 1865, the Thirteenth Amendment to the United States Constitution, abolishing slavery, was ratified.",
  "12-19": "In 1939, the Soviet Union was expelled from the League of Nations.",
  "12-20":
    "In 1803, the United States purchased the Louisiana Territory from France, doubling the size of the United States.",
  "12-21":
    "In 1937, the world's first helium-filled airship, the Hindenburg, made its maiden voyage.",
  "12-22": "In 1864, the International Red Cross was founded.",
  "12-23":
    "In 1911, the first successful monoplane flight took place in France.",
  "12-24":
    "In 1968, Apollo 8 became the first manned spacecraft to orbit the moon.",
  "12-25":
    "In 336 A.D., the first recorded celebration of Christmas took place in Rome.",
  "12-26":
    "In 1776, Thomas Paine published Common Sense, an influential pamphlet advocating for American independence.",
  "12-27":
    "In 1822, the first edition of the Oxford English Dictionary was published.",
  "12-28":
    "In 1895, the first commercial movie theater opened in New York City.",
  "12-29":
    "In 1890, the Wounded Knee Massacre occurred in South Dakota, resulting in the death of more than 300 Native American men, women, and children.",
  "12-30":
    "In 1922, the Union of Soviet Socialist Republics (USSR) was founded.",
  "12-31":
    "In 1775, the first American abolition society was formed in Philadelphia, Pennsylvania.",
};
