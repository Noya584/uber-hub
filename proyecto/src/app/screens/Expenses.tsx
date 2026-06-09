import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { expenses, weeklyExpenses } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function Expenses() {
  return (
    <div className="h-full overflow-auto p-6">
      <h1 className="text-xl font-medium mb-6">Gastos · Junio 2025</h1>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-base">Gasto por semana</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyExpenses}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="week"
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  stroke="rgba(255,255,255,0.2)"
                />
                <YAxis
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  stroke="rgba(255,255,255,0.2)"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                  }}
                />
                <Bar dataKey="amount" fill="#06C167" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-base">Desglose por persona</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expenses.map((expense) => (
                <div key={expense.member} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#9C27B0] flex items-center justify-center text-sm">
                      {expense.member[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{expense.member}</div>
                      <div className="text-xs text-white/60">{expense.rides} viajes</div>
                    </div>
                  </div>
                  <div className="font-medium">${expense.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {expenses.map((expense, index) => {
          const colors = ['#9C27B0', '#4CAF50', '#FFC107', '#9E9E9E'];
          return (
            <Card key={expense.member} className="bg-white/5 border-white/10">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: colors[index] }}
                  >
                    {expense.member[0]}
                  </div>
                  <CardTitle className="text-sm">{expense.member}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-medium mb-1">
                  ${expense.amount.toLocaleString()}
                </div>
                <div className="text-xs text-white/60">{expense.rides} viajes en total</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
