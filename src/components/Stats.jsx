import stats from '../data/stats'

export default function Stats() {
  return (
    <div className="stats" data-stats>
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}