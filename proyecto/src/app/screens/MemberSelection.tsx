import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { members, groups } from '../data/mockData';
import { MapView } from '../components/MapView';

export function MemberSelection() {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState('sofia');

  const handleContinue = () => {
    navigate('/grupos/set-destination');
  };

  return (
    <>
      <MapView />
      <Dialog open onOpenChange={() => navigate('/grupos')}>
        <DialogContent className="bg-[#1a1a1a] border-white/10 max-w-md">
          <DialogHeader>
            <DialogTitle>¿Para quién es el viaje?</DialogTitle>
          </DialogHeader>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <Input
              placeholder="Buscar miembro"
              className="pl-9 bg-white/5 border-white/10"
            />
          </div>

          <RadioGroup value={selectedMember} onValueChange={setSelectedMember}>
            <div className="space-y-2">
              {members.map((member) => {
                const group = groups.find((g) => g.id === member.group);
                return (
                  <Label
                    key={member.id}
                    htmlFor={member.id}
                    className={`flex items-center gap-3 p-3 rounded border cursor-pointer ${
                      selectedMember === member.id
                        ? 'border-[#06C167] bg-[#06C167]/10'
                        : 'border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <RadioGroupItem value={member.id} id={member.id} />
                    <Avatar className="w-10 h-10">
                      <AvatarFallback style={{ backgroundColor: group?.color }}>
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-white/60">{member.role}</div>
                    </div>
                  </Label>
                );
              })}
            </div>
          </RadioGroup>

          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              className="flex-1 border-white/20"
              onClick={() => navigate('/grupos')}
            >
              Cancelar
            </Button>
            <Button
              className="flex-1 bg-[#06C167] hover:bg-[#06C167]/90"
              onClick={handleContinue}
            >
              Continuar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
