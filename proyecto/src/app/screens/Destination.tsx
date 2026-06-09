import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Label } from '../components/ui/label';
import { MapView } from '../components/MapView';

export function Destination() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<'UberX' | 'Comfort' | 'Black'>('Comfort');

  const handleConfirm = () => {
    navigate('/grupos/driver-assigned');
  };

  return (
    <>
      <MapView />
      <Dialog open onOpenChange={() => navigate('/grupos')}>
        <DialogContent className="bg-[#1a1a1a] border-white/10 max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-[#9C27B0]">S</AvatarFallback>
              </Avatar>
              <DialogTitle>Sofía</DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-3">
            <div>
              <Label className="text-sm text-white/60 mb-1.5">Origen</Label>
              <Input
                value="Av. Libertador 1234"
                className="bg-white/5 border-white/10"
                readOnly
              />
            </div>

            <div>
              <Label className="text-sm text-white/60 mb-1.5">Destino</Label>
              <Input
                placeholder="Ingresa el destino"
                className="bg-white/5 border-white/10"
                autoFocus
              />
            </div>

            <div>
              <Label className="text-sm text-white/60 mb-2">Categoría</Label>
              <div className="grid grid-cols-3 gap-2">
                {(['UberX', 'Comfort', 'Black'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-3 rounded border text-sm ${
                      category === cat
                        ? 'border-[#06C167] bg-[#06C167]/10'
                        : 'border-white/10 hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded p-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Estimación</span>
                <span>~$3.200 · 12 min</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              className="flex-1 border-white/20"
              onClick={() => navigate('/grupos/select-member')}
            >
              Atrás
            </Button>
            <Button
              className="flex-1 bg-[#06C167] hover:bg-[#06C167]/90"
              onClick={handleConfirm}
            >
              Confirmar viaje
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
