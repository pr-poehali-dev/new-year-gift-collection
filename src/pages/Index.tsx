import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Gift {
  id: number;
  name: string;
  price: string;
  category: string;
  interest: string;
  type: string;
  trend: boolean;
  emoji: string;
  description: string;
}

const gifts: Gift[] = [
  { id: 1, name: 'Умная колонка Яндекс Станция', price: '10990', category: 'tech', interest: 'technology', type: 'adult', trend: true, emoji: '🔊', description: 'Голосовой помощник с отличным звуком' },
  { id: 2, name: 'Набор для рисования Aquarelle Pro', price: '2500', category: 'creative', interest: 'creative', type: 'universal', trend: false, emoji: '🎨', description: 'Профессиональные акварельные краски' },
  { id: 3, name: 'Беспроводные наушники AirPods', price: '15990', category: 'tech', interest: 'technology', type: 'adult', trend: true, emoji: '🎧', description: 'Качественный звук и активное шумоподавление' },
  { id: 4, name: 'Настольная игра Alias Party', price: '1490', category: 'game', interest: 'entertainment', type: 'universal', trend: false, emoji: '🎲', description: 'Веселая игра для компании' },
  { id: 5, name: 'Фитнес-браслет Xiaomi Band 8', price: '4990', category: 'sport', interest: 'sport', type: 'adult', trend: true, emoji: '⌚', description: 'Мониторинг здоровья и активности' },
  { id: 6, name: 'Конструктор LEGO Creator', price: '7990', category: 'toy', interest: 'creative', type: 'kids', trend: false, emoji: '🧱', description: 'Развивающий конструктор 10+' },
  { id: 7, name: 'Электросамокат Kugoo', price: '24990', category: 'transport', interest: 'sport', type: 'adult', trend: true, emoji: '🛴', description: 'Быстрое передвижение по городу' },
  { id: 8, name: 'Набор косметики Dior', price: '8500', category: 'beauty', interest: 'beauty', type: 'adult', trend: true, emoji: '💄', description: 'Премиальная косметика класса люкс' },
  { id: 9, name: 'Кофемашина Delonghi', price: '29990', category: 'home', interest: 'home', type: 'adult', trend: false, emoji: '☕', description: 'Профессиональный кофе дома' },
  { id: 10, name: 'Электронная книга Kindle', price: '12990', category: 'tech', interest: 'technology', type: 'adult', trend: true, emoji: '📚', description: 'Тысячи книг в кармане' },
  { id: 11, name: 'Набор для выпечки', price: '2990', category: 'home', interest: 'creative', type: 'universal', trend: false, emoji: '🍰', description: 'Все для домашней выпечки' },
  { id: 12, name: 'VR-очки Meta Quest 3', price: '49990', category: 'tech', interest: 'technology', type: 'adult', trend: true, emoji: '🥽', description: 'Виртуальная реальность нового поколения' },
  { id: 13, name: 'Робот-пылесос Xiaomi', price: '19990', category: 'home', interest: 'home', type: 'adult', trend: true, emoji: '🤖', description: 'Умная уборка без усилий' },
  { id: 14, name: 'Скейтборд профессиональный', price: '5990', category: 'sport', interest: 'sport', type: 'kids', trend: false, emoji: '🛹', description: 'Для начинающих и опытных' },
  { id: 15, name: 'Портативная колонка JBL', price: '7990', category: 'tech', interest: 'technology', type: 'universal', trend: false, emoji: '📻', description: 'Мощный звук в компактном корпусе' },
];

const Snowflake = ({ delay }: { delay: number }) => (
  <div 
    className="absolute text-white text-2xl pointer-events-none"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animation: 'snowfall 10s linear infinite'
    }}
  >
    ❄️
  </div>
);

export default function Index() {
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [interestFilter, setInterestFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filterGifts = (gifts: Gift[]) => {
    return gifts.filter(gift => {
      const priceNum = parseInt(gift.price);
      let priceMatch = true;
      
      if (priceFilter === 'budget') priceMatch = priceNum < 1000;
      else if (priceFilter === 'medium') priceMatch = priceNum >= 1000 && priceNum < 3000;
      else if (priceFilter === 'premium') priceMatch = priceNum >= 3000 && priceNum < 10000;
      else if (priceFilter === 'luxury') priceMatch = priceNum >= 10000;

      const interestMatch = interestFilter === 'all' || gift.interest === interestFilter;
      const typeMatch = typeFilter === 'all' || gift.type === typeFilter;

      return priceMatch && interestMatch && typeMatch;
    });
  };

  const trendingGifts = gifts.filter(g => g.trend);
  const filteredGifts = filterGifts(gifts);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <Snowflake key={i} delay={i * 0.7} />
      ))}

      <div className="relative z-10">
        <header className="py-20 px-4 text-center bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-6xl mb-4 animate-scale-in">🎄</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in drop-shadow-lg">
              Новогодние подарки 2024
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in drop-shadow">
              Лучшие идеи подарков для ваших близких ✨
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-3xl animate-fade-in">
              <span>🎁</span>
              <span>⭐</span>
              <span>🎅</span>
              <span>🎉</span>
              <span>❄️</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-7xl">
          <section className="mb-16">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl border-4 border-accent/30 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 flex items-center justify-center gap-3">
                <span>🔥</span>
                <span>Трендовые подарки 2024</span>
                <span>🔥</span>
              </h2>
              <p className="text-center text-muted-foreground mb-8">Самые популярные подарки этого года</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingGifts.map((gift, index) => (
                  <Card 
                    key={gift.id} 
                    className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-scale-in bg-gradient-to-br from-white to-primary/5"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-5xl">{gift.emoji}</div>
                        <Badge className="bg-primary text-white font-bold">ХИТ!</Badge>
                      </div>
                      <CardTitle className="text-xl">{gift.name}</CardTitle>
                      <CardDescription>{gift.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-primary">{parseInt(gift.price).toLocaleString('ru-RU')} ₽</span>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                          <Icon name="ShoppingCart" size={16} className="mr-1" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <span>🎯</span>
                <span>Подборки подарков</span>
              </h2>

              <Tabs defaultValue="price" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
                  <TabsTrigger value="price" className="text-base py-3">
                    <Icon name="Tag" size={18} className="mr-2" />
                    По цене
                  </TabsTrigger>
                  <TabsTrigger value="interest" className="text-base py-3">
                    <Icon name="Heart" size={18} className="mr-2" />
                    По интересам
                  </TabsTrigger>
                  <TabsTrigger value="type" className="text-base py-3">
                    <Icon name="Users" size={18} className="mr-2" />
                    По типу
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="price" className="space-y-6">
                  <div className="flex flex-wrap gap-3 justify-center mb-6">
                    <Button 
                      variant={priceFilter === 'all' ? 'default' : 'outline'}
                      onClick={() => setPriceFilter('all')}
                      className="font-semibold"
                    >
                      Все подарки
                    </Button>
                    <Button 
                      variant={priceFilter === 'budget' ? 'default' : 'outline'}
                      onClick={() => setPriceFilter('budget')}
                    >
                      До 1 000 ₽
                    </Button>
                    <Button 
                      variant={priceFilter === 'medium' ? 'default' : 'outline'}
                      onClick={() => setPriceFilter('medium')}
                    >
                      1 000 - 3 000 ₽
                    </Button>
                    <Button 
                      variant={priceFilter === 'premium' ? 'default' : 'outline'}
                      onClick={() => setPriceFilter('premium')}
                    >
                      3 000 - 10 000 ₽
                    </Button>
                    <Button 
                      variant={priceFilter === 'luxury' ? 'default' : 'outline'}
                      onClick={() => setPriceFilter('luxury')}
                    >
                      От 10 000 ₽
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGifts.map((gift, index) => (
                      <Card 
                        key={gift.id} 
                        className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-primary/30"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="text-4xl">{gift.emoji}</div>
                            {gift.trend && <Badge variant="secondary">Тренд</Badge>}
                          </div>
                          <CardTitle className="text-lg">{gift.name}</CardTitle>
                          <CardDescription className="text-sm">{gift.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">{parseInt(gift.price).toLocaleString('ru-RU')} ₽</span>
                            <Button size="sm" variant="outline">
                              <Icon name="Info" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="interest" className="space-y-6">
                  <div className="flex flex-wrap gap-3 justify-center mb-6">
                    <Button 
                      variant={interestFilter === 'all' ? 'default' : 'outline'}
                      onClick={() => setInterestFilter('all')}
                    >
                      Все интересы
                    </Button>
                    <Button 
                      variant={interestFilter === 'technology' ? 'default' : 'outline'}
                      onClick={() => setInterestFilter('technology')}
                    >
                      <Icon name="Laptop" size={16} className="mr-2" />
                      Технологии
                    </Button>
                    <Button 
                      variant={interestFilter === 'sport' ? 'default' : 'outline'}
                      onClick={() => setInterestFilter('sport')}
                    >
                      <Icon name="Dumbbell" size={16} className="mr-2" />
                      Спорт
                    </Button>
                    <Button 
                      variant={interestFilter === 'creative' ? 'default' : 'outline'}
                      onClick={() => setInterestFilter('creative')}
                    >
                      <Icon name="Palette" size={16} className="mr-2" />
                      Творчество
                    </Button>
                    <Button 
                      variant={interestFilter === 'beauty' ? 'default' : 'outline'}
                      onClick={() => setInterestFilter('beauty')}
                    >
                      <Icon name="Sparkles" size={16} className="mr-2" />
                      Красота
                    </Button>
                    <Button 
                      variant={interestFilter === 'home' ? 'default' : 'outline'}
                      onClick={() => setInterestFilter('home')}
                    >
                      <Icon name="Home" size={16} className="mr-2" />
                      Для дома
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGifts.map((gift, index) => (
                      <Card 
                        key={gift.id} 
                        className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-secondary/30"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="text-4xl">{gift.emoji}</div>
                            {gift.trend && <Badge variant="secondary">Тренд</Badge>}
                          </div>
                          <CardTitle className="text-lg">{gift.name}</CardTitle>
                          <CardDescription className="text-sm">{gift.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-secondary">{parseInt(gift.price).toLocaleString('ru-RU')} ₽</span>
                            <Button size="sm" variant="outline">
                              <Icon name="Info" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="type" className="space-y-6">
                  <div className="flex flex-wrap gap-3 justify-center mb-6">
                    <Button 
                      variant={typeFilter === 'all' ? 'default' : 'outline'}
                      onClick={() => setTypeFilter('all')}
                    >
                      Все типы
                    </Button>
                    <Button 
                      variant={typeFilter === 'kids' ? 'default' : 'outline'}
                      onClick={() => setTypeFilter('kids')}
                    >
                      <Icon name="Baby" size={16} className="mr-2" />
                      Для детей
                    </Button>
                    <Button 
                      variant={typeFilter === 'adult' ? 'default' : 'outline'}
                      onClick={() => setTypeFilter('adult')}
                    >
                      <Icon name="User" size={16} className="mr-2" />
                      Для взрослых
                    </Button>
                    <Button 
                      variant={typeFilter === 'universal' ? 'default' : 'outline'}
                      onClick={() => setTypeFilter('universal')}
                    >
                      <Icon name="Gift" size={16} className="mr-2" />
                      Универсальные
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGifts.map((gift, index) => (
                      <Card 
                        key={gift.id} 
                        className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-accent/50"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="text-4xl">{gift.emoji}</div>
                            {gift.trend && <Badge variant="secondary">Тренд</Badge>}
                          </div>
                          <CardTitle className="text-lg">{gift.name}</CardTitle>
                          <CardDescription className="text-sm">{gift.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-accent-foreground">{parseInt(gift.price).toLocaleString('ru-RU')} ₽</span>
                            <Button size="sm" variant="outline">
                              <Icon name="Info" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-4xl mb-4">🎅 🎄 ⭐</div>
            <p className="text-lg font-semibold mb-2">С наступающим Новым 2025 годом!</p>
            <p className="text-white/80">Пусть каждый подарок принесет радость и тепло ✨</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
